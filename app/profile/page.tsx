'use client';

import Layout from '@/components/layout';
import { AnimatePresence, motion } from 'framer-motion';
import { Suspense, useState } from 'react';

function Profile() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Layout.Content>
        <div>
          <h1>ProfilePage</h1>
          <button onClick={handleOpen}>Open</button>
          <button onClick={handleClose}>Close</button>
          <Modal isOpen={isOpen} onClose={handleClose} />
        </div>
      </Layout.Content>
    </>
  );
}

const Modal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 flex items-center justify-center"
          >
            <div className="rounded-md bg-white p-4">
              <h1>Modal</h1>
              <button onClick={onClose}>Close</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function ProfilePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Profile />
    </Suspense>
  );
}
