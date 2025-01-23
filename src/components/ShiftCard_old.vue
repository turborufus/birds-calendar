<template>
  <v-card class="pa-3">
    <v-card-title align="left">
      {{ formattedDate }} {{ shift.time }} 
      <v-spacer></v-spacer>
      {{ shiftTypeName }}
    </v-card-title>
    <v-card-subtitle  align="left">Требуется людей:{{ shift.people_needed }}</v-card-subtitle>
    <v-card-text  align="left">{{ shift.notes }}</v-card-text>

    <!-- <v-card-actions>
      <v-btn @click="goToShiftDetail(shift.id)" text="Подробнее" ></v-btn>
    </v-card-actions> -->

    <v-card-actions>
      <v-btn @click="dialog = true" text="Участвовать" ></v-btn>
    </v-card-actions>

    <!-- Модальное окно для формы -->
    <v-dialog v-model="dialog" max-width="400px">
      <v-card>
        <v-card-title>
          <span class="headline">Заполните форму</span>
        </v-card-title>

        <v-card-text>
          <!-- Форма с полями ввода -->
          <v-form ref="form" v-model="formValid">
            <v-text-field
              v-model="userData.name"
              label="Имя"
              required
            ></v-text-field>
            <v-text-field
              v-model="userData.email"
              label="Электронная почта"
              type="email"
              required
            ></v-text-field>
            <v-textarea
              v-model="userData.message"
              label="Сообщение"
              required
            ></v-textarea>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-btn @click="dialog = false" text>Закрыть</v-btn>
          <v-btn @click="submitForm" color="primary" :disabled="!formValid">Отправить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    

  </v-card>
</template>

<script>

export default {
  name: 'ShiftCard',
  props: {
    shift: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      dialog: false,  // Управление открытием/закрытием модалки
      formValid: false,  // Проверка валидности формы
      userData: {
        name: '',
        email: '',
        message: ''
      }
    }    
  },
  computed: {
    shiftTypeName() {
      // Допустим, shift.type - это объект, и мы хотим его свойство 'name'
      return this.shift.type ? this.shift.type.name : 'Неизвестный тип';
    },
    formattedDate() {
      // Форматируем дату из поля shift.date
      return new Date(this.shift.date).toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
    }
  },
  methods: {
    goToShiftSignUp(id) {
      // Логика перехода к деталям смены
      this.$router.push({ name: 'ShiftSignUpPage', params: { id } });
    },
    async submitForm() {
      // if (this.formValid) {
      //   try {
      //     // Отправка данных на сервер
      //     const response = await this.$axios.post('/api/submit', this.userData);
      //     console.log('Данные отправлены успешно:', response.data);
      //     this.dialog = false;  // Закрываем модальное окно после успешной отправки
      //   } catch (error) {
      //     console.error('Ошибка при отправке данных:', error);
      //   }
      // }

      if (this.formValid) {
        this.dialog = false;  // Закрываем модальное окно после успешной отправки
      }
    }
  }
        
}

</script>
<style scoped>
.v-btn {
  width: 100%;  /* Убедитесь, что кнопка будет удобной для нажатия на мобильном устройстве */
}
</style>