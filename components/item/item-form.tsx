'use client';

import { useState, useEffect } from 'react';
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
import { useCategoryList } from '@/queries/refrigerator/queries';
import { Item } from '@/interfaces/item.interface';

export default function ItemModalForm({
  refrigeratorId,
  isOpen,
  onOpenChange,
  editItem,
}: {
  refrigeratorId: string;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  editItem?: Item;
}) {
  const [open, setOpen] = useState(isOpen ?? false);
  const [selectModalOpen, setSelectModalOpen] = useState(false);
  const queryClient = useQueryClient();

  const isEditMode = !!editItem;

  const { data: categories } = useCategoryList();

  const { mutate: createItem, isPending: isCreatePending } = useItemMutation(
    () => {
      setOpen(false);
      if (onOpenChange) onOpenChange(false);
      form.reset();
      queryClient.invalidateQueries({ queryKey: ['items'] });
    },
    (error) => {
      console.error('아이템 생성 중 오류 발생:', error);
    },
  );

  const { mutate: updateItem, isPending: isUpdatePending } = useItemMutation(
    () => {
      setOpen(false);
      if (onOpenChange) onOpenChange(false);
      form.reset();
      queryClient.invalidateQueries({ queryKey: ['items'] });
    },
    (error) => {
      console.error('아이템 수정 중 오류 발생:', error);
    },
  );

  const isPending = isCreatePending || isUpdatePending;

  const form = useForm<ItemFormData>({
    resolver: zodResolver(itemSchema),
    defaultValues: editItem
      ? {
          name: editItem.name,
          photoUrl: editItem.photoUrl || '',
          quantity: editItem.quantity,
          categoryId: Number(editItem.categoryId),
          expirationDate: new Date(editItem.expirationDate),
        }
      : {
          name: '',
          photoUrl: '',
          quantity: 1,
          categoryId: 1,
          expirationDate: new Date(),
        },
    mode: 'onSubmit',
  });

  // useEffect를 사용하여 외부에서 isOpen 상태가 변경될 때 내부 상태도 업데이트
  useEffect(() => {
    if (isOpen !== undefined) {
      setOpen(isOpen);
    }
  }, [isOpen]);

  // 내부 상태가 변경될 때 외부 상태도 업데이트
  useEffect(() => {
    if (onOpenChange) {
      onOpenChange(open);
    }
  }, [open, onOpenChange]);

  function onSubmit(values: ItemFormData) {
    if (isEditMode && editItem) {
      updateItem({ ...values, ingredientId: editItem.id, refrigeratorId, isUpdate: true });
    } else {
      createItem({ ...values, refrigeratorId });
    }
  }

  // 추가 버튼 부분은 수정 모드일 때는 렌더링하지 않음
  if (isEditMode) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90dvh] overflow-y-auto scrollbar-hide sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>재료 수정</DialogTitle>
            <DialogDescription>냉장고에 있는 재료 정보를 수정해주세요.</DialogDescription>
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
                name="categoryId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>카테고리</FormLabel>
                    <Select onValueChange={(value) => field.onChange(Number(value))} value={field.value.toString()}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="카테고리를 선택하세요" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories?.map((category) => (
                          <SelectItem key={category.id} value={category.id.toString()}>
                            {category.name}
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
                          className="min-h-[325px]"
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
                  {isPending ? '저장중...' : '수정하기'}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    );
  }

  // 기존 추가 모달 코드
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
        <DialogContent className="max-h-[90dvh] overflow-y-auto scrollbar-hide sm:max-w-[500px]">
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
                name="categoryId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>카테고리</FormLabel>
                    <Select onValueChange={(value) => field.onChange(Number(value))} value={field.value.toString()}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="카테고리를 선택하세요" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories?.map((category) => (
                          <SelectItem key={category.id} value={category.id.toString()}>
                            {category.name}
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
                          className="min-h-[325px]"
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
