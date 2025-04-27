import { useState, useEffect } from 'react';

/**
 * 터치 디바이스와 클릭 디바이스를 구분하는 훅
 * @returns 디바이스 타입 정보를 담은 객체
 */
export const useDeviceType = () => {
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);
  const [isClickDevice, setIsClickDevice] = useState<boolean>(false);

  useEffect(() => {
    // 터치 이벤트 지원 여부 확인
    const hasTouchScreen =
      ('maxTouchPoints' in navigator && navigator.maxTouchPoints > 0) ||
      ('msMaxTouchPoints' in navigator && (navigator as any).msMaxTouchPoints > 0) ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      ((navigator as any).msMaxTouchPoints && (navigator as any).msMaxTouchPoints > 0);

    // 터치 이벤트와 마우스 이벤트 모두 지원하는 경우 (예: 터치스크린이 있는 노트북)
    const hasBothTouchAndMouse = hasTouchScreen && ('onmousedown' in window || 'onclick' in window);

    // 터치 디바이스 판별
    setIsTouchDevice(hasTouchScreen);

    // 클릭 디바이스 판별 (마우스만 있거나, 터치와 마우스 모두 있는 경우)
    setIsClickDevice(!hasTouchScreen || hasBothTouchAndMouse);

    // 사용자 에이전트 문자열을 통한 추가 확인
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);

    // 모바일 기기인 경우 터치 디바이스로 설정
    if (isMobile) {
      setIsTouchDevice(true);
      setIsClickDevice(false);
    }
  }, []);

  return {
    isTouchDevice,
    isClickDevice,
  };
};

export default useDeviceType;
