/**
 * DreamIT Coding Hub - 사이트 설정 파일
 * 코딩학습 사이트 허브의 브랜드, 메뉴, 학습사이트 정보를 정의합니다.
 */

import type { SiteConfig } from '../types';

const site: SiteConfig = {
  id: 'coding-hub',
  name: 'DreamIT Coding Hub',
  nameKo: '드림아이티 코딩학습사이트',
  description: 'DreamIT Coding Hub - 코딩학습 사이트 허브. HTML, React, Python, Java, C 등 7개 코딩 학습 플랫폼',
  url: 'https://coding-hub.dreamitbiz.com',
  dbPrefix: 'cdh_',

  parentSite: { name: 'DreamIT Biz', url: 'https://www.dreamitbiz.com' },

  brand: {
    parts: [
      { text: 'Coding', className: 'brand-biz' },
      { text: ' Hub', className: 'brand-dream' },
    ]
  },

  themeColor: '#10B981',

  company: {
    name: '드림아이티비즈(DreamIT Biz)',
    ceo: '이애본',
    bizNumber: '601-45-20154',
    salesNumber: '제2024-수원팔달-0584호',
    address: '경기도 수원시 팔달구 매산로 45, 419호',
    email: 'aebon@dreamitbiz.com',
    phone: '010-3700-0629',
    kakao: 'aebon',
    businessHours: '평일: 09:00 ~ 18:00',
  },

  features: { shop: true, community: true, search: true, auth: true, license: true },

  colors: [
    { name: 'green', color: '#10B981' },
    { name: 'blue', color: '#2563EB' },
    { name: 'purple', color: '#7C3AED' },
    { name: 'red', color: '#DC2626' },
    { name: 'orange', color: '#F59E0B' },
  ],

  categories: [
    { id: 'web-frontend', name: '웹 프론트엔드', nameEn: 'Web Frontend', icon: 'fa-solid fa-globe', path: '/courses/web-frontend' },
    { id: 'programming', name: '프로그래밍 언어', nameEn: 'Programming Languages', icon: 'fa-solid fa-code', path: '/courses/programming' },
    { id: 'fullstack', name: '풀스택', nameEn: 'Full Stack', icon: 'fa-solid fa-layer-group', path: '/courses/fullstack' },
  ],

  menuItems: [
    {
      labelKey: 'site.nav.webFrontend', path: '/courses/web-frontend', activePath: '/courses/web-frontend',
      dropdown: [
        { path: '/courses/html', labelKey: 'site.nav.html' },
        { path: '/courses/reactstudy', labelKey: 'site.nav.reactStudy' },
      ]
    },
    {
      labelKey: 'site.nav.programming', path: '/courses/programming', activePath: '/courses/programming',
      dropdown: [
        { path: '/courses/coding', labelKey: 'site.nav.coding' },
        { path: '/courses/python-study', labelKey: 'site.nav.pythonStudy' },
        { path: '/courses/java-study', labelKey: 'site.nav.javaStudy' },
        { path: '/courses/c-study', labelKey: 'site.nav.cStudy' },
      ]
    },
    {
      labelKey: 'site.nav.fullstack', path: '/courses/fullstack', activePath: '/courses/fullstack',
      dropdown: [
        { path: '/courses/webstudy', labelKey: 'site.nav.webStudy' },
      ]
    },
    {
      labelKey: 'site.nav.franchise', path: '/franchise', activePath: '/franchise',
      dropdown: [
        { path: '/pricing', labelKey: 'site.nav.pricing' },
        { path: '/franchise', labelKey: 'site.nav.franchiseInquiry' },
        { path: '/shop', labelKey: 'shop.title' },
      ]
    },
    {
      labelKey: 'site.nav.community', path: '/about', activePath: '/about',
      dropdown: [
        { path: '/about', labelKey: 'site.nav.aboutHub' },
        { path: '/notice', labelKey: 'site.nav.notice' },
        { path: '/qna', labelKey: 'site.nav.qna' },
      ]
    },
  ],

  footerLinks: [
    { path: '/courses/web-frontend', labelKey: 'site.nav.webFrontend' },
    { path: '/courses/programming', labelKey: 'site.nav.programming' },
    { path: '/courses/fullstack', labelKey: 'site.nav.fullstack' },
    { path: '/franchise', labelKey: 'site.nav.franchise' },
    { path: '/pricing', labelKey: 'site.nav.pricing' },
    { path: '/about', labelKey: 'site.nav.community' },
  ],

  familySites: [
    { name: 'DreamIT Edu Hub', url: 'https://edu-hub.dreamitbiz.com' },
    { name: 'DreamIT CS Hub', url: 'https://cs-hub.dreamitbiz.com' },
    { name: 'DreamIT AI Hub', url: 'https://ai-hub.dreamitbiz.com' },
    { name: 'DreamIT Biz', url: 'https://www.dreamitbiz.com' },
  ],

  learningSites: [
    // ── 웹 프론트엔드 (web-frontend) ──
    {
      id: 'html', name: 'HTML5 + CSS3 & Glossary', nameEn: 'HTML5 + CSS3 & Glossary', url: 'https://html.dreamitbiz.com',
      icon: 'fa-brands fa-html5', color: '#E34F26', category: 'web-frontend',
      description: '웹의 기초인 HTML5와 CSS3를 배우고 반응형 웹 페이지를 만듭니다.',
      descriptionEn: 'Learn web fundamentals HTML5/CSS3 and build responsive web pages.',
      techStack: ['HTML5', 'CSS3', '반응형', 'Flexbox'], difficulty: 'beginner',
      curriculum: ['HTML 기본 태그', 'CSS 스타일링', 'Flexbox와 Grid', '반응형 디자인', '웹 페이지 프로젝트'],
      curriculumEn: ['HTML basic tags', 'CSS styling', 'Flexbox and Grid', 'Responsive design', 'Web page project'],
      features: ['실습 중심', '반응형 웹', '포트폴리오 제작'],
      featuresEn: ['Practice-centered', 'Responsive web', 'Portfolio creation'],
      target: '웹 개발 입문자', targetEn: 'Web development beginners',
    },
    {
      id: 'reactstudy', name: 'React 학습', nameEn: 'React Development', url: 'https://reactstudy.dreamitbiz.com',
      icon: 'fa-brands fa-react', color: '#61DAFB', category: 'web-frontend',
      description: 'React를 활용한 모던 프론트엔드 개발을 체계적으로 학습합니다.',
      descriptionEn: 'Systematically learn modern frontend development with React.',
      techStack: ['React', 'TypeScript', 'Hooks', '상태관리'], difficulty: 'intermediate',
      curriculum: ['React 기본 개념', 'JSX와 컴포넌트', 'Hooks와 상태 관리', '라우팅과 API 연동', 'React 프로젝트 실습'],
      curriculumEn: ['React fundamentals', 'JSX and components', 'Hooks and state management', 'Routing and API integration', 'React project practice'],
      features: ['컴포넌트 설계', 'TypeScript 적용', '실전 프로젝트'],
      featuresEn: ['Component design', 'TypeScript integration', 'Real-world projects'],
      target: '프론트엔드 개발자 지망생', targetEn: 'Aspiring frontend developers',
    },
    // ── 프로그래밍 언어 (programming) ──
    {
      id: 'coding', name: '프로그래밍 코딩학습', nameEn: 'Programming & Coding', url: 'https://coding.dreamitbiz.com',
      icon: 'fa-solid fa-laptop-code', color: '#2563EB', category: 'programming',
      description: '프로그래밍의 기본 개념과 코딩 실습을 통해 개발 역량을 키웁니다.',
      descriptionEn: 'Build development skills through basic programming concepts and coding practice.',
      techStack: ['Python', 'JavaScript', '알고리즘기초', '문제해결'], difficulty: 'beginner',
      curriculum: ['프로그래밍 개념 이해', '변수와 자료형', '조건문과 반복문', '함수와 모듈', '기초 프로젝트 실습'],
      curriculumEn: ['Understanding programming concepts', 'Variables and data types', 'Conditionals and loops', 'Functions and modules', 'Basic project practice'],
      features: ['실습 중심 학습', '코드 리뷰', '프로젝트 기반'],
      featuresEn: ['Practice-centered learning', 'Code review', 'Project-based'],
      target: '프로그래밍 입문자, 비전공자', targetEn: 'Programming beginners, non-CS majors',
    },
    {
      id: 'python-study', name: '파이썬 마스터', nameEn: 'Python Master', url: 'https://python-study.dreamitbiz.com',
      icon: 'fa-brands fa-python', color: '#3776AB', category: 'programming',
      description: 'Python 프로그래밍의 기초부터 데이터 분석, 자동화까지 폭넓게 학습합니다.',
      descriptionEn: 'Learn Python programming from basics to data analysis and automation.',
      techStack: ['Python', '데이터분석', '자동화', '웹크롤링'], difficulty: 'beginner',
      curriculum: ['Python 기본 문법', '자료구조 활용', '파일 처리와 예외', '라이브러리 활용', '미니 프로젝트'],
      curriculumEn: ['Python basics', 'Data structure usage', 'File handling and exceptions', 'Library usage', 'Mini projects'],
      features: ['실습 프로젝트', '자동화 스크립트', '데이터 분석 입문'],
      featuresEn: ['Practice projects', 'Automation scripts', 'Data analysis intro'],
      target: '프로그래밍 입문자, 데이터 분석 관심자', targetEn: 'Programming beginners, data analysis enthusiasts',
    },
    {
      id: 'java-study', name: '자바 마스터', nameEn: 'Java Master', url: 'https://java-study.dreamitbiz.com',
      icon: 'fa-brands fa-java', color: '#F89820', category: 'programming',
      description: 'Java 객체지향 프로그래밍과 엔터프라이즈 개발 기초를 학습합니다.',
      descriptionEn: 'Learn Java OOP and enterprise development fundamentals.',
      techStack: ['Java', 'OOP', '컬렉션', '스레드'], difficulty: 'intermediate',
      curriculum: ['Java 기본 문법', '객체지향 프로그래밍', '컬렉션 프레임워크', '예외 처리와 I/O', '멀티스레드 프로그래밍'],
      curriculumEn: ['Java basics', 'Object-oriented programming', 'Collection framework', 'Exception handling and I/O', 'Multi-thread programming'],
      features: ['OOP 설계 패턴', '실전 프로젝트', '코딩 테스트 대비'],
      featuresEn: ['OOP design patterns', 'Real-world projects', 'Coding test prep'],
      target: 'CS전공자, 백엔드 개발자 지망생', targetEn: 'CS majors, aspiring backend developers',
    },
    {
      id: 'c-study', name: 'C언어 학습', nameEn: 'C Programming', url: 'https://c-study.dreamitbiz.com',
      icon: 'fa-solid fa-c', color: '#6366F1', category: 'programming',
      description: 'C언어의 기초부터 포인터, 메모리 관리까지 시스템 프로그래밍을 학습합니다.',
      descriptionEn: 'Learn system programming from C basics to pointers and memory management.',
      techStack: ['C언어', '포인터', '메모리관리', '시스템프로그래밍'], difficulty: 'intermediate',
      curriculum: ['C언어 기본 문법', '포인터와 배열', '구조체와 공용체', '파일 입출력', '동적 메모리 할당'],
      curriculumEn: ['C language basics', 'Pointers and arrays', 'Structs and unions', 'File I/O', 'Dynamic memory allocation'],
      features: ['시스템 프로그래밍', '메모리 관리 실습', '코딩 테스트 대비'],
      featuresEn: ['System programming', 'Memory management practice', 'Coding test prep'],
      target: 'CS전공자, 시스템 개발자 지망생', targetEn: 'CS majors, aspiring system developers',
    },
    // ── 풀스택 (fullstack) ──
    {
      id: 'webstudy', name: 'Vibe Backend', nameEn: 'Vibe Backend', url: 'https://webstudy.dreamitbiz.com',
      icon: 'fa-solid fa-globe', color: '#0891B2', category: 'fullstack',
      description: '웹 개발 전반의 이론과 실습을 통해 풀스택 역량을 키웁니다.',
      descriptionEn: 'Build full-stack skills through web development theory and practice.',
      techStack: ['프론트엔드', '백엔드', 'API', '배포'], difficulty: 'intermediate',
      curriculum: ['웹 아키텍처 이해', '프론트엔드 기술', '백엔드와 API', '데이터베이스 연동', '배포와 DevOps 기초'],
      curriculumEn: ['Web architecture', 'Frontend technologies', 'Backend and API', 'Database integration', 'Deployment and DevOps basics'],
      features: ['풀스택 프로젝트', '실전 배포', 'API 설계'],
      featuresEn: ['Full-stack projects', 'Real deployment', 'API design'],
      target: '웹 개발자 지망생', targetEn: 'Aspiring web developers',
    },
  ],
};

export default site;
