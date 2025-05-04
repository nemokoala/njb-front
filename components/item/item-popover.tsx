'use client';

import { Ellipsis, Pencil, Trash2 } from 'lucide-react';

import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Item } from '@/interfaces/item.interface';
import { useState } from 'react';
import ItemModalForm from './item-modal';
import { useUrlQuery } from '@/hooks/use-url-query';
import { useItemDeleteMutation } from '@/queries/refrigerator/mutation';
import { useModal } from '@/providers/modal-provider';
import { useQueryClient } from '@tanstack/react-query';

export default function ItemPopover({ item }: { item: Item }) {
  const [open, setOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { getParam } = useUrlQuery();
  const { changeModalContent } = useModal();
  const refrigeratorId = getParam('refrigeratorId') as string;
  const queryClient = useQueryClient();

  const { mutate: deleteItem, isPending: isDeletePending } = useItemDeleteMutation(
    () => {
      setOpen(false);
      queryClient.resetQueries({ queryKey: ['items', refrigeratorId] });
    },
    (error) => {
      console.error('아이템 삭제 중 오류 발생:', error);
    },
  );

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button className="ml-0.5 mr-3.5 flex h-7 w-7 items-center justify-center rounded-full bg-gray-200">
            <Ellipsis className="h-4 w-4 text-blue-500" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="mr-4 w-32 bg-white p-2">
          <div className="flex flex-col py-1">
            <button
              className="flex items-center gap-2 rounded-sm px-3 py-2 text-sm hover:bg-gray-100"
              onClick={() => {
                setIsEditModalOpen(true);
                setOpen(false);
              }}
            >
              <Pencil className="h-4 w-4" />
              <span>수정</span>
            </button>
            <button
              className="flex items-center gap-2 rounded-sm px-3 py-2 text-sm text-red-500 hover:bg-gray-100"
              onClick={() => {
                setOpen(false);
                changeModalContent(
                  {
                    title: '삭제',
                    content: '정말 삭제하시겠습니까?',
                    cancelable: true,
                  },
                  () => {
                    deleteItem({ refrigeratorId, ingredientId: [item.id] });
                  },
                );
              }}
            >
              <Trash2 className="h-4 w-4" />
              <span>삭제</span>
            </button>
          </div>
        </PopoverContent>
      </Popover>

      {isEditModalOpen && (
        <ItemModalForm
          refrigeratorId={refrigeratorId}
          isOpen={isEditModalOpen}
          onOpenChange={setIsEditModalOpen}
          editItem={item}
        />
      )}
    </>
  );
}
