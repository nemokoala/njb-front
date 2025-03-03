'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { CalendarIcon, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { QuantitySlider } from '@/components/common/quantity-slider';
import { itemSchema, ItemFormData } from '@/lib/schema';
import { useItemMutation } from '@/queries/refrigerator/mutation';
import { useQueryClient } from '@tanstack/react-query';

const categories = ['과일', '채소', '육류', '유제품', '기타'];

export default function IngredientModalForm({ refrigeratorId }: { refrigeratorId: string }) {
  const [open, setOpen] = useState(false);
  const [selectModalOpen, setSelectModalOpen] = useState(false);
  const queryClient = useQueryClient();

  const { mutate: createItem, isPending } = useItemMutation(
    () => {
      setOpen(false);
      form.reset();
      queryClient.invalidateQueries({ queryKey: ['items'] });
    },
    (error) => {
      console.error('아이템 생성 중 오류 발생:', error);
    },
  );

  const form = useForm<ItemFormData>({
    resolver: zodResolver(itemSchema),
    defaultValues: {
      name: '',
      photoUrl: '',
      quantity: 1,
      category: '',
      expirationDate: new Date(),
    },
    mode: 'onSubmit',
  });

  function onSubmit(values: ItemFormData) {
    createItem({ ...values, refrigeratorId });
  }

  return (
    <>
      <Dialog open={selectModalOpen} onOpenChange={setSelectModalOpen}>
        <DialogTrigger asChild>
          <Button className="gap-2" variant="default">
            <Plus size={16} />
            <span>재료 추가하기</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>재료 추가 방식 선택</DialogTitle>
            <DialogDescription>원하시는 재료 추가 방식을 선택해주세요.</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3 py-4">
            <Button
              onClick={() => {
                setSelectModalOpen(false);
                setOpen(true);
              }}
              variant="outline"
              className="w-full"
            >
              수동으로 추가하기
            </Button>
            <Button variant="outline" className="w-full">
              사진으로 하나 추가하기
            </Button>
            <Button variant="outline" className="w-full">
              사진으로 여러개 추가하기
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[100dvh] overflow-y-auto sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>재료 정보</DialogTitle>
            <DialogDescription>냉장고에 추가할 재료 정보를 입력해주세요.</DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>재료 이름</FormLabel>
                    <FormControl>
                      <Input placeholder="재료 이름을 입력하세요" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="photoUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>재료 사진</FormLabel>
                    <FormControl>
                      <Input placeholder="사진 URL을 입력하세요 (선택사항)" {...field} value={field.value || ''} />
                    </FormControl>
                    <FormDescription>재료 사진의 URL을 입력하세요. (선택사항)</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>수량</FormLabel>
                    <FormControl>
                      <QuantitySlider
                        value={field.value}
                        onChange={(value) => field.onChange(value)}
                        min={1}
                        max={100}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>카테고리</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="카테고리를 선택하세요" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="expirationDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>유통기한</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            className={`w-full pl-3 text-left font-normal ${!field.value && 'text-muted-foreground'}`}
                          >
                            {field.value ? (
                              format(field.value, 'PPP', { locale: ko })
                            ) : (
                              <span>유통기한을 선택하세요</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date() || date > new Date('2100-01-01')}
                          initialFocus
                          locale={ko}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                  취소
                </Button>
                <Button type="submit" disabled={isPending}>
                  {isPending ? '저장중...' : '저장하기'}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}
