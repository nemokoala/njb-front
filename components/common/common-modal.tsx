import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useModal } from '@/providers/modal-provider';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

/**
 * 공통 모달 컴포넌트
 * 모달 내용을 변경하고 싶으면 modalContent를 변경하면 됨. <span className="">내용</span> 형태로 작성. p나 div 태그는 구조 오류 발생
 * cancelable이 true일 경우 취소 버튼이 보임.
 * canceable이 false일 때 모달 닫기(모달 외부 클릭 포함) 시 확인 함수 실행
 * canceable이 true일 때 모달 닫기(모달 외부 클릭 포함) 시 취소 함수 실행
 */
export const CommonModal = () => {
  const { isOpen, setIsOpen, modalContent, confirmActionRef, closeActionRef } = useModal();

  useEffect(() => {
    if (modalContent.content) {
      setIsOpen(true);
    }
  }, [modalContent]);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open && !modalContent.cancelable) {
          confirmActionRef.current?.();
        }
        if (!open && modalContent.cancelable) {
          closeActionRef.current?.();
        }
        setIsOpen(open);
      }}
    >
      <DialogContent
        className="w-9/12 max-w-screen-sm gap-4 rounded-[20px] bg-white p-6"
        aria-describedby="modal-description"
      >
        <DialogHeader>
          <DialogTitle className="whitespace-pre-line text-center text-lg font-bold text-[#1c1918]">
            {modalContent.title}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-center text-sm font-normal text-[#6f6b6a]">
          {modalContent.content ?? <span></span>}
        </DialogDescription>
        <div className="flex justify-center gap-[10px]">
          {modalContent.cancelable && (
            <Button
              variant="default"
              className="h-8 w-fit min-w-[100px] rounded-3xl border border-[#3c3938] !bg-white px-5 text-sm font-bold text-[#3c3938]"
              onClick={() => {
                closeActionRef.current?.();
                setIsOpen(false);
              }}
            >
              취소
            </Button>
          )}

          <Button
            variant="default"
            className="h-8 w-fit min-w-[100px] rounded-3xl px-5 text-sm font-bold text-white"
            onClick={() => {
              confirmActionRef.current?.();
              setIsOpen(false);
            }}
          >
            확인
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
