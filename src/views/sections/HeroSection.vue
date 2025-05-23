<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1>AI를 기반한 프로세스 관리에서 실행까지를 손쉽게 시작하세요</h1>
        <p>Process GPT로 비즈니스 프로세스를 자연어로 정의하고 실행 가능한 모델로 변환하세요. 전통적인 BPM 작업을 단순화하고 비용과 노력을 줄일 수 있습니다.</p>
        <div class="hero-buttons">
          <a href="https://www.process-gpt.io/" target="_blank" class="btn btn-primary">지금 시작하기</a>
          <router-link class="btn btn-secondary" to="/marketplace" @click="scrollToTop">마켓플레이스</router-link>
          <!-- <a href="#" class="btn btn-secondary">마켓플레이스</a> -->
        </div>
        <div class="mt-6">
          <a target="_blank" class="text-blue-600 hover:text-blue-800 font-medium flex items-center" href="/src/assets/images/process_gpt_presentation.pdf">
            <span>Technical Report 보기</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 ml-1"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
          </a>
        </div>
      </div>
      <div class="hero-image">
        <img src="@/assets/images/main-img-gpt.png" alt="Process GPT 대시보드" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style scoped>
.hero {
  padding: 60px 0;
  background-color: var(--bg-color-light);
  position: relative;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.hero-content {
  flex: 1;
  max-width: 600px;
  margin-right: 40px;
}

.hero h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-color-dark);
  margin-bottom: 20px;
  line-height: 1.2;
}

.hero p {
  font-size: 1.1rem;
  color: var(--text-color);
  margin-bottom: 30px;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 15px;
}

.btn {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 5px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

  /* .btn-primary {
    background-color: var(--primary-color);
    color: white;
  }

  .btn-primary:hover {
    background-color: var(--primary-color-dark);
    transform: translateY(-2px);
  }

  .btn-secondary {
    background-color: transparent;
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
  }

  .btn-secondary:hover {
    background-color: var(--primary-color-light);
    transform: translateY(-2px);
  } */

.hero-image {
  flex: 1;
  max-width: 500px;
}

.hero-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  /* box-shadow: 0 10px 30px var(--shadow-color); */
}

@media (max-width: 992px) {
  .container {
    flex-direction: column;
  }
  
  .hero-content {
    margin-right: 0;
    margin-bottom: 40px;
    text-align: center;
    max-width: 100%;
  }
  
  .hero-buttons {
    justify-content: center;
  }
  
  .hero-image {
    max-width: 100%;
  }
}

@media (max-width: 576px) {
  .hero {
    padding: 100px 0 40px;
  }
  
  .hero h1 {
    font-size: 1.8rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    width: 100%;
  }
  
  .btn {
    width: 100%;
    text-align: center;
  }
}
</style>
