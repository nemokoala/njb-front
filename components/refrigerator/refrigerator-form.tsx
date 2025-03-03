'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
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
import { Textarea } from '@/components/ui/textarea';
import { Plus } from 'lucide-react';
import { refrigeratorSchema, RefrigeratorFormData } from '@/lib/schema';
import { useRefrigeratorMutation } from '@/queries/refrigerator/mutation';
import { useQueryClient } from '@tanstack/react-query';
export default function RefrigeratorModalForm() {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const { mutate: createRefrigerator, isPending } = useRefrigeratorMutation(
    (response) => {
      queryClient.invalidateQueries({ queryKey: ['refrigerators'] });
    },
    (error) => {
      console.error(error);
    },
  );
  const form = useForm<RefrigeratorFormData>({
    resolver: zodResolver(refrigeratorSchema),
    defaultValues: {
      name: '',
      photoUrl: '',
      description: '',
    },
    mode: 'onSubmit',
  });

  function onSubmit(values: RefrigeratorFormData) {
    if (isPending) return;
    createRefrigerator(values);
    console.log(values);
    // 여기에 제출 로직 추가
    setOpen(false); // 제출 후 모달 닫기
    form.reset(); // 폼 초기화
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Plus size={16} />
          <span>냉장고 추가하기</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[90%] rounded-md sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>냉장고 정보</DialogTitle>
          <DialogDescription>냉장고 정보를 입력해주세요.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>냉장고 이름</FormLabel>
                  <FormControl>
                    <Input placeholder="냉장고 이름을 입력하세요" {...field} />
                  </FormControl>
                  <FormDescription>냉장고를 구분할 수 있는 이름을 입력하세요.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="photoUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>냉장고 사진</FormLabel>
                  <FormControl>
                    <Input placeholder="사진 URL을 입력하세요 (선택사항)" {...field} />
                  </FormControl>
                  <FormDescription>냉장고 사진의 URL을 입력하세요. (선택사항)</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>냉장고 설명</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="냉장고에 대한 설명을 입력하세요 (선택사항)"
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>냉장고에 대한 추가 설명을 입력하세요. (선택사항)</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                취소
              </Button>
              <Button type="submit">저장하기</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
