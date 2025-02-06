'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export default function SortControl() {
  const router = useRouter();
  const searchParams = useSearchParams(); // 현재 쿼리 파라미터 확인 가능

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortValue = e.target.value;

    // 기존 쿼리 파라미터를 복사하고, sort를 변경
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set('sort', sortValue);

    // 새로 만든 쿼리 파라미터를 이용해 페이지 이동 (SSR 재요청)
    router.push(`/?${newSearchParams.toString()}`);
    // router.replace() 도 가능하지만, push는 브라우저 히스토리에 기록.
  };

  return (
    <select onChange={handleChange} defaultValue={searchParams.get('sort') || 'expiredAt'}>
      <option value="expiredAt">유통기한순</option>
      <option value="name">이름순</option>
    </select>
  );
}
