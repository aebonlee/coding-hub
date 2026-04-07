/**
 * DreamIT Exam Hub - 사이트 설정 파일
 * 자격증 학습사이트 허브의 브랜드, 메뉴, 학습사이트 정보를 정의합니다.
 */

import type { SiteConfig } from '../types';

const site: SiteConfig = {
  id: 'exam-hub',
  name: 'DreamIT Exam Hub',
  nameKo: '드림아이티 자격증학습사이트',
  description: 'DreamIT Exam Hub - 자격증 학습사이트 허브. 정보처리기사, SQLD 등 2개 자격증 학습 플랫폼',
  url: 'https://exam-hub.dreamitbiz.com',
  dbPrefix: 'exh_',

  parentSite: { name: 'DreamIT Biz', url: 'https://www.dreamitbiz.com' },

  brand: {
    parts: [
      { text: 'Exam', className: 'brand-biz' },
      { text: ' Hub', className: 'brand-dream' },
    ]
  },

  themeColor: '#B45309',

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
    { name: 'orange', color: '#B45309' },
    { name: 'red', color: '#C8102E' },
    { name: 'green', color: '#00855A' },
    { name: 'blue', color: '#0046C8' },
    { name: 'purple', color: '#8B1AC8' },
  ],

  categories: [
    { id: 'it-cert', name: 'IT자격증', nameEn: 'IT Certifications', icon: 'fa-solid fa-certificate', path: '/courses/it-cert' },
  ],

  menuItems: [
    {
      labelKey: 'site.nav.itCert', path: '/courses/it-cert', activePath: '/courses/it-cert',
      dropdown: [
        { path: '/courses/eip', labelKey: 'site.nav.eip' },
        { path: '/courses/sqld', labelKey: 'site.nav.sqld' },
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
    { path: '/courses/it-cert', labelKey: 'site.nav.itCert' },
    { path: '/franchise', labelKey: 'site.nav.franchise' },
    { path: '/about', labelKey: 'site.nav.community' },
  ],

  familySites: [
    { name: 'DreamIT Edu Hub', url: 'https://edu-hub.dreamitbiz.com' },
    { name: 'DreamIT CS Hub', url: 'https://cs-hub.dreamitbiz.com' },
    { name: 'DreamIT Career Hub', url: 'https://career-hub.dreamitbiz.com' },
    { name: 'DreamIT Biz', url: 'https://www.dreamitbiz.com' },
  ],

  learningSites: [
    {
      id: 'eip', name: '정보처리기사', nameEn: 'Engineer Information Processing', url: 'https://eip.dreamitbiz.com',
      icon: 'fa-solid fa-award', color: '#2563EB', category: 'it-cert',
      description: '정보처리기사 필기·실기 시험을 체계적으로 준비합니다.',
      descriptionEn: 'Systematically prepare for the Engineer Information Processing written and practical exams.',
      techStack: ['소프트웨어공학', '데이터베이스', '네트워크', '정보보안'], difficulty: 'intermediate',
      curriculum: ['소프트웨어 설계', '소프트웨어 개발', '데이터베이스 구축', '프로그래밍 언어 활용', '정보시스템 구축관리'],
      curriculumEn: ['Software design', 'Software development', 'Database construction', 'Programming language utilization', 'Information system management'],
      features: ['기출문제 풀이', '모의고사', '핵심 요약'],
      featuresEn: ['Past exam practice', 'Mock exams', 'Key summaries'],
      target: '정보처리기사 수험생', targetEn: 'EIP exam candidates',
    },
    {
      id: 'sqld', name: 'SQLD', nameEn: 'SQL Developer', url: 'https://sqld.dreamitbiz.com',
      icon: 'fa-solid fa-database', color: '#059669', category: 'it-cert',
      description: 'SQL 개발자 자격증 시험을 체계적으로 준비합니다.',
      descriptionEn: 'Systematically prepare for the SQL Developer certification exam.',
      techStack: ['SQL', '데이터모델링', '성능최적화', 'ERD'], difficulty: 'intermediate',
      curriculum: ['데이터 모델링의 이해', 'SQL 기본', 'SQL 활용', '관리 구문', '성능 최적화'],
      curriculumEn: ['Understanding data modeling', 'SQL basics', 'SQL utilization', 'Management syntax', 'Performance optimization'],
      features: ['기출문제 풀이', 'SQL 실습', '핵심 이론 정리'],
      featuresEn: ['Past exam practice', 'SQL practice', 'Key theory review'],
      target: 'SQLD 수험생, DB 개발자 지망생', targetEn: 'SQLD candidates, aspiring DB developers',
    },
  ],
};

export default site;
