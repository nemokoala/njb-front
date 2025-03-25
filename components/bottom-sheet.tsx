import { motion, useAnimation, PanInfo } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useBottomSheet } from '@/providers/bottom-modal-provider';

export const BottomSheet = () => {
  const controls = useAnimation();
  const [isDragging, setIsDragging] = useState(false);
  const { isVisible, hideModal, modalContent } = useBottomSheet();

  useEffect(() => {
    if (isVisible) {
      controls.start({ y: 0 });
    } else {
      controls.start({ y: '100%' });
    }
  }, [isVisible, controls]);

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.y > 50) {
      controls.start({ y: '100%' });
      hideModal();
    } else {
      controls.start({ y: 0 });
    }
    setIsDragging(false);
  };

  return (
    <motion.div
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={0.2}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={handleDragEnd}
      initial={{ y: '100%' }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 left-0 z-50 h-1/2 w-full rounded-t-3xl bg-white p-6"
    >
      <div className="absolute left-1/2 top-2 h-1 w-12 -translate-x-1/2 rounded-full bg-gray-300" />
      <div className={`mt-4 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}>{modalContent}</div>
    </motion.div>
  );
};
