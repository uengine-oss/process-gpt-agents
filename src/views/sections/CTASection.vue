<template>
  <section id="contact" class="cta-box" :class="{ 'form-open': isFormOpen }">
    <div class="container">
      <div class="cta-content">
        <div>
          <h2>지금 바로 Process GPT를 시작하세요</h2>
          <p>AI 기반 프로세스 관리의 혁신을 경험해보세요</p>
          <div class="cta-buttons">
            <a href="https://forms.gle/f8AmiCa3wvRztUHu7" target="_blank" class="btn btn-primary-cta">Waitlist에 등록하기</a>
            <!-- <a href="https://www.process-gpt.io/" target="_blank" class="btn btn-primary-cta">시작하기</a> -->
            <button @click="openForm" class="btn btn-secondary-cta">
              <span>문의하기</span>
            </button>
            <!-- <a href="#" class="btn btn-secondary-cta">문의하기</a> -->
          </div>
        </div>
      </div>

      <ContactFormModal ref="contactForm" @form-toggle="handleFormToggle" />

    </div>
  </section>
</template>

<script>
import ContactFormModal from './ContactFormModal.vue';

export default {
  name: 'CTASection',
  components: {
    ContactFormModal
  },
  data() {
    return {
      isFormOpen: false
    };
  },
  methods: {
    openForm() {
      this.isFormOpen = true;
      this.$refs.contactForm.showForm = true;
    },
    handleFormToggle(isOpen) {
      this.isFormOpen = isOpen;
    }
  }
}
</script>

<style scoped>
.cta-box.form-open {
  min-height: 950px;
}

.cta-box {
  padding: 80px 0;
  background-color: #4a6cf7;
  /* background-color: rgb(37 99 235/var(--tw-bg-opacity,1)); */
  position: relative;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.cta-content {
 /* min-height: 600px;  문제해결되면 뺄것 */
  text-align: center;
  max-width: 1100px;
  margin: 0 auto;
}

.cta-box h2 {
  font-size: 2.2rem;
  font-weight: 700;
  /* color: var(--text-color-dark); */
  color: white;
  margin-bottom: 15px;
}

.cta-box p {
  font-size: 1.1rem;
  /* color: var(--text-color); */
  color: white;
  margin-bottom: 30px;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.btn {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 5px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-primary-cta {
  /* background-color: #4a6cf7; */
  background-color: white;
  color: #4a6cf7;
  /* color: white; */
}

.btn-primary-cta:hover {
  /* background-color: var(--primary-color-dark); */
  transform: translateY(-2px);
}

.btn-secondary-cta {
  background-color: transparent;
  /* color: #4a6cf7;
  border: 1px solid #4a6cf7; */
  color: white;
  border: 1px solid white;
}

.btn-secondary-cta:hover {
  /* background-color: var(--primary-color-light); */
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .cta-box.form-open {
    min-height: 1100px;
  }

  .cta-box {
    padding: 60px 0;
  }
  
  .cta-box h2 {
    font-size: 1.8rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
  
  .btn {
    width: 100%;
    text-align: center;
  }
}

@media (max-width: 376px){
  .cta-box.form-open {
    min-height: 1150px;
  }
}
</style>
