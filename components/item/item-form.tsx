import { Form, FormMessage, FormControl, FormItem, FormLabel, FormField, FormDescription } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Calendar } from '../ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { QuantitySlider } from '../common/quantity-slider';
import { UseFormReturn } from 'react-hook-form';
import { ItemFormData } from '@/lib/schema';
import { Category } from '@/interfaces/refrigerator.interface';
import { CalendarIcon, ImagePlus } from 'lucide-react';
import { DialogFooter } from '../ui/dialog';
import DatePicker from '../common/date-picker';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from '../ui/sheet';
import { useState } from 'react';
import ImageUploadButton from './image-upload-button';
import ImageSearch from './image-search';

export default function ItemModalForm({
  form,
  categories,
  onSubmit,
  isPending,
  setOpen,
  mode,
}: {
  form: UseFormReturn<ItemFormData>;
  categories: Category[] | undefined;
  onSubmit: (data: ItemFormData) => void;
  isPending: boolean;
  setOpen: (open: boolean) => void;
  mode: 'edit' | 'create';
}) {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full flex-col space-y-6 overflow-x-hidden px-0.5">
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
                <div className="flex flex-col gap-2">
                  <ImageUploadButton value={field.value} onChange={(url) => field.onChange(url)} type="ingredient" />
                  <ImageSearch form={form} value={field.value} onChange={(url) => field.onChange(url)} />
                </div>
              </FormControl>
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
                <QuantitySlider value={field.value} onChange={(value) => field.onChange(value)} min={1} max={100} />
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
                  <SelectTrigger onClick={(e) => e.currentTarget.blur()}>
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
              <Sheet open={isBottomSheetOpen} onOpenChange={setIsBottomSheetOpen}>
                <SheetTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={`w-full pl-3 text-left font-normal ${!field.value && 'text-muted-foreground'}`}
                    >
                      {field.value ? format(field.value, 'PPP', { locale: ko }) : <span>유통기한을 선택하세요</span>}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </SheetTrigger>
                <SheetContent className="mx-auto w-full max-w-screen-md rounded-t-3xl p-0" side="bottom">
                  <SheetHeader className="flex w-full items-center justify-center pt-5">
                    <SheetTitle>유통기한 선택</SheetTitle>
                  </SheetHeader>
                  <DatePicker form={form} initialDate={field.value} setIsBottomSheetOpen={setIsBottomSheetOpen} />
                </SheetContent>
              </Sheet>
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogFooter className="flex justify-end gap-2">
          <Button type="button" variant="outline" onClick={() => setOpen(false)}>
            취소
          </Button>
          <Button type="submit" disabled={isPending}>
            {isPending ? '저장중...' : mode === 'edit' ? '수정하기' : '추가하기'}
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
}
