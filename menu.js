const menuDb = [
  {
    name: '라공방',
    kind: '중식',
    star: 8,
    distance: 1,
  },
  {
    name: '대려도',
    kind: '중식',
    star: 8,
    distance: 7,
  },
  {
    name: '리원',
    kind: '중식',
    star: 7,
    distance: 2,
  },
  {
    name: '딘타이펑',
    kind: '중식',
    star: 8,
    distance: 7,
  },
  {
    name: '봉피양',
    kind: '한식',
    star: 7,
    distance: 10,
  },
  {
    name: '풍국면',
    kind: '한식',
    star: null,
    distance: 7,
  },
  {
    name: '탄탄면',
    kind: '한식',
    star: 3,
    distance: 5,
  },
  {
    name: '백암순대',
    kind: '한식',
    star: 8,
    distance: 5,
  },
  {
    name: '이태리 부대찌개',
    kind: '한식',
    star: 6,
    distance: 3,
  },
  {
    name: '을밀대',
    kind: '한식',
    star: 7,
    distance: 5,
  },
  {
    name: '봉된장',
    kind: '한식',
    star: 6,
    distance: 3,
  },
  {
    name: '창고43',
    kind: '한식',
    star: 9,
    distance: 5,
  },
  {
    name: '통돼지 찌개집',
    kind: '한식',
    star: 7,
    distance: 3,
  },
  {
    name: '찌개집',
    kind: '한식',
    star: 6,
    distance: 3,
  },
  {
    name: '서향란 청국장',
    kind: '한식',
    star: 6,
    distance: 1,
  },
  {
    name: '강남불백',
    kind: '한식',
    star: 7,
    distance: 5,
  },
  {
    name: '금모래',
    kind: '한식',
    star: null,
    distance: 3,
  },
  {
    name: '김밥카페',
    kind: '한식',
    star: 6,
    distance: 2,
  },
  {
    name: '투뿔등심',
    kind: '한식',
    star: 7,
    distance: 1,
  },
  {
    name: '신동궁',
    kind: '한식',
    star: null,
    distance: 5,
  },
  {
    name: 'NY BnB 버거',
    kind: '양식',
    star: 9,
    distance: 3,
  },
  {
    name: '라그릴리아',
    kind: '양식',
    star: 8,
    distance: 6,
  },
  {
    name: '강남돈까스',
    kind: '양식',
    star: 7,
    distance: 1,
  },
  {
    name: '기리야마',
    kind: '일식',
    star: 8,
    distance: 1,
  },
  {
    name: '기리야마',
    kind: '일식',
    star: 8,
    distance: 1,
  },
  {
    name: '아오리라멘',
    kind: '일식',
    star: 7,
    distance: 1,
  },
  {
    name: '오무라안',
    kind: '일식',
    star: 8,
    distance: 7,
  },
  {
    name: '유타로',
    kind: '일식',
    star: 8,
    distance: 8,
  },
  {
    name: '정돈',
    kind: '일식',
    star: 9,
    distance: 8,
  },
  {
    name: '마키노차야',
    kind: '일식',
    star: 8,
    distance: 5,
  },
  {
    name: '산토카 라멘',
    kind: '일식',
    star: null,
    distance: 5,
  },
  {
    name: 'PIG in the garden',
    kind: '기타',
    star: null,
    distance: 5,
  },
]


const selectedNum = Math.floor((Math.random() * (menuDb.length -1)));
const selected = menuDb[selectedNum];

console.log(`현재시각 : ${new Date}`)
console.log(`오늘의 메뉴\n 이름: ${selected.name}\n 종류: ${selected.kind}\n 별점: ${selected.star}\n 거리: ${selected.distance}`);