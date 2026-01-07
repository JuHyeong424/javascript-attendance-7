<h1>우아한테크코스 출석 시스템</h1>

<p>
  우아한테크코스 최종 코딩 테스트 과제
</p>

<hr />

<h2>프로젝트 소개</h2>
<p>
우아한테크코스에서 학생의 출석 관리를 위한 시스템을 만든다.
</p>
<ul>
<li>출석 확인은 출석 데이터가 저장된 시간 기준.</li>
<li>시간은 24시간 형식만.</li>
<li>교육시간은 월 13시부터, 나머지 목~금은 10시부터.</li>
<li>5분 초과는 지각. 30분 초과는 결석.</li>
<li>출석 기록 없으면 결석.</li>
<li>결석 5회 초과 시 제적.</li>
<li>지각 3회 = 결석 1회.</li>
<li>경고: 결석 2회 이상</li>
<li>면담: 결석 3회 이상</li>
<li>제적: 결석 5회 초과</li>
<li>캠퍼스 운영 시간 08시~23시</li>
<li>에러시 종료</li>
</ul>

<hr />

<h2>실행 방법</h2>

<pre>
git clone https://github.com/your-id/project-name.git
cd project-name
npm install
npm start
</pre>

<hr />

<h2>기능 요구사항</h2>

<ul>
  <li>
    <strong>출석 확인</strong>
    <ul>
      <li>닉네임과 등교 시간을 입력하면 출석</li>
      <li>출석 기록 확인 가능</li>  
      <li>출석 후에는 수정해야함.</li>  
    </ul>
  </li>

  <li>
    <strong>출석 수정</strong>
    <ul>
      <li>출석 확인을 수정하려면 닉네임, 수정하려는 날짜, 등교 시간을 입력하여 기록을 수정</li>
      <li>수정 후에는 변경 전과 변경 후의 출석 기록을 확인 가능</li>  
      <li>출석 후에는 수정해야함.</li>  
    </ul>
  </li>

  <li>
    <strong>크루별 출석 기록 확인</strong>
    <ul>
      <li>닉네임을 입력하면 전날까지의 크루 출석 기록을 확인 가능</li>  
    </ul>
  </li>

  <li>
    <strong>제적 위험자 확인</strong>
    <ul>
      <li>전날까지의 크루 출석 기록을 바탕으로 제적 위험자를 파악</li>  
      <li>전제적 위험자는 제적 대상자, 면담 대상자, 경고 대상자순으로 출력</li>  
      <li>정렬 순서는 지각을 결석으로 간주하여 내림차순</li>  
      <li>출석 상태가 같으면 닉네임으로 오름차순 정렬</li>
    </ul>
  </li>
</ul>

<hr />

<h2>예외 처리</h2>

<ul>
  <li>
    <strong>기능 선택 항목, 날짜 또는 시간을 잘못된 형식으로 입력한 경우</strong>
    <pre>
[ERROR] 잘못된 형식을 입력하였습니다.
</pre>
  </li>

  <li>
    <strong>등록되지 않은 닉네임을 입력한 경우</strong>
    <pre>
[ERROR] 등록되지 않은 닉네임입니다.
</pre>
  </li>

<li>
    <strong>주말 또는 공휴일에 출석을 확인하거나 수정하는 경우</strong>
    <pre>
[ERROR] 12월 14일 토요일은 등교일이 아닙니다.
</pre>
  </li>

<li>
    <strong>미래 날짜로 출석을 수정하는 경우</strong>
    <pre>
[ERROR] 아직 수정할 수 없습니다.</pre>
  </li>

<li>
    <strong>등교 시간이 캠퍼스 운영 시간이 아닌 경우</strong>
    <pre>
[ERROR] 캠퍼스 운영 시간에만 출석이 가능합니다.
</pre>
  </li>

<li>
    <strong>이미 출석을 하였는데 다시 출석 확인을 하는 경우
</strong>
    <pre>
[ERROR] 이미 출석을 확인하였습니다. 필요한 경우 수정 기능을 이용해 주세요.
</pre>
  </li>
</ul>

<hr />

<h2>기술 스택</h2>

<ul>
  <li>JavaScript (ES6+)</li>
  <li>Node.js</li>
  <li>Jest</li>
  <li>@woowacourse/mission-utils</li>
</ul>

<hr />

<h2>구현 의도</h2>

<ul>
  <li>
    <strong>도메인 중심 설계</strong><br />
    할인 및 프로모션 계산 로직을 도메인 객체 내부에서 처리하여
    책임과 역할을 명확히 분리했습니다.
  </li>
  <li>
    <strong>안정적인 흐름 제어</strong><br />
    예외 발생 시 프로그램이 종료되지 않고
    다시 입력을 받을 수 있도록 구현했습니다.
  </li>
</ul>

<hr />

<h2> 개발자</h2>

<p>
주형 장<br />
우아한테크코스 프론트엔드 지원
</p>


