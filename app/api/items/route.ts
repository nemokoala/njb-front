import { NextResponse } from 'next/server';
let a = 0;
export async function GET() {
  try {
    console.log(a++);
    return NextResponse.json([
      {
        id: 1,
        name: '가지',
        createdAt: '2025-01-27',
        expiredAt: '2025-02-12',
        imgUrl: 'https://cdn.news.hidoc.co.kr/news/photo/201906/19346_46057_0533.jpg',
      },
      {
        id: 2,
        name: '사과',
        createdAt: '2025-01-29',
        expiredAt: '2025-02-08',
        imgUrl: 'https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/2774556398/B.jpg?890000000',
      },
      {
        id: 3,
        name: '딸기',
        createdAt: '2025-01-27',
        expiredAt: '2025-02-05',
        imgUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjy01oiVGg0gzy879DYeeAzgbeJYadJ8uoP9yqvlR9rnxs7z9mL2t90vjNdkHUjtQi_HIvhuJlgPwWe8PHNItfIA',
      },
      { id: 4, name: '포도', createdAt: '2025-01-27', expiredAt: '2025-04-27' },
      { id: 5, name: '바나나', createdAt: '2025-01-27', expiredAt: '2025-05-27' },
      { id: 6, name: '배', createdAt: '2025-01-27', expiredAt: '2025-01-29' },
    ]);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  // request body 파싱
  const body = await request.json();

  // POST 요청 처리
  return NextResponse.json({ message: 'Data received', data: body });
}

export async function PUT(request: Request) {
  const body = await request.json();

  // PUT 요청 처리
  return NextResponse.json({ message: 'Updated' });
}

export async function DELETE(request: Request) {
  // DELETE 요청 처리
  return NextResponse.json({ message: 'Deleted' });
}
