import { createStore } from 'vuex';

export default createStore({
  namespaced: true,
  state: {
    isLoggedIn: false, // Для логина
    headquarters: [
      {
        id: 1,
        name: "Штаб 1",
        location: "Анапа",
      },
      {
        id: 2,
        name: "Штаб 2",
        location: "Анапа",
      },
    ],
    sections: [
      {
        name: "ШТАБ",
        headquarter: 1,
        roles: [
          {
            role: "Координатор штаба",
            shifts: [ 
              {
                time: "00:00-08:00",
                required: 1,
                experienced: 1,
                volunteers: [
                  { id: 1, name: "Иван Иванов", experience: true, phone: "123456", telegram:"", notes: "" },
                ],
              }, 
              {
                time: "08:00-16:00",
                required: 1,
                experienced: 1,
                volunteers: [ ],
              },
              {
                time: "16:00-24:00",
                required: 1,
                experienced: 1,
                volunteers: [
                  { id:2, name: "Царева Екатерина", experience: true, phone: "+7900000000", notes: "" }
                ],
              }
            ]
          },
          {
            role: "Администратор",
            shifts: [ 
              {
                time: "00:00-08:00",
                required: 1,
                experienced: 1,
                volunteers: [
                  { id: 1, name: "Иван Иванов", experience: true, phone: "123456", notes: "" },
                ],
              }, 
              {
                time: "08:00-16:00",
                required: 1,
                experienced: 1,
                volunteers: [ ],
              },
              {
                time: "16:00-24:00",
                required: 1,
                experienced: 1,
                volunteers: [
                  { id:2, name: "Царева Екатерина", experience: true, phone: "+7900000000", notes: "" }
                ],
              }
            ],
          },
          {
            role: "Связист",
            shifts: [ 
              {
                time: "00:00-08:00",
                required: 1,
                experienced: 1,
                volunteers: [
                  { id: 1, name: "Иван Иванов", experience: true, phone: "123456", notes: "" },
                ],
              }, 
              {
                time: "08:00-16:00",
                required: 1,
                experienced: 1,
                volunteers: [ ],
              },
              {
                time: "16:00-24:00",
                required: 1,
                experienced: 1,
                volunteers: [
                  { id:2, name: "Царева Екатерина", experience: true, phone: "+7900000000", notes: "" }
                ],
              }
            ]
          },
        ],
      },
      {
        name: "ПТИЦЫ",
        headquarter: 1,  // в какому штабу относится секция
        roles: [
          {
            role: "Регистрация птиц",
            shifts: [
              {
                time: "00:00-08:00",
                required: 3,
                experienced: 1,
                volunteers: [
                  { id: 1, name: "Анна Петрова", phone: "789101", experience: true },
                ],
              },
              {
                time: "08:00-16:00",
                required: 3,
                experienced: 1,
                volunteers: [
                  { id: 1, name: "Анна Петрова", phone: "789101", experience: true },
                ],
              },
              {
                time: "16:00-00:00",
                required: 5,
                experienced: 1,
                volunteers: [
                ],
              }
            ]
          },
          {
            role: "Вет.врач (первичка+крахмал+мойка)",
            shifts: [
              {
                time: "08:00-20:00",
                required: 1,
                experienced: 1,
                volunteers: [
                  { id: 1, name: "Анна Петрова", phone: "789101", experience: true },
                ],
              },
              {
                time: "20:00-08:00",
                required: 1,
                experienced: 1,
                volunteers: [
                  { id: 1, name: "Анна Петрова", phone: "789101", experience: true },
                ],
              }
            ]
          },
          {
            role: "Первичка",
            shifts: [
              {
                time: "00:00-08:00",
                required: 10,
                experienced: 4,
                volunteers: [
                  { id: 1, name: "Анна Петрова", phone: "789101", experience: true },
                  { id: 1, name: "Анна Петрова", phone: "789101", experience: true },
                  { id: 1, name: "Анна Петрова", phone: "789101", experience: false },
                  { id: 1, name: "Анна Петрова", phone: "789101", experience: false },
                ],
              },
              {
                time: "08:00-16:00",
                required: 10,
                experienced: 4,
                volunteers: [
                  { id: 1, name: "Анна Петрова", phone: "789101", experience: true },
                ],
              },
              {
                time: "16:00-00:00",
                required: 10,
                experienced: 4,
                volunteers: [
                ],
              }
            ]
          },
        ],
      },
    ],
    volunteers: [
      { id: 1, name: "Анна Петрова", experience: true, phone: "+79991234567", telegram: "@anna_petrova", note: "" },
      { id: 2, name: "Иван Иванов", experience: false, phone: "", telegram: "", note: "Может участвовать только по выходным" },
      { id: 3, name: "Мария Сидорова", experience: true, phone: "+79998765432", telegram: "@maria_sidorova", note: "" },
      { id: 4, name: "Олег Смирнов", experience: false, phone: "+79991239876", telegram: "@oleg_smirnov", note: "" },
      { id: 5, name: "Елена Воробьева", experience: true, phone: "", telegram: "", note: "Имеет опыт работы с детьми" },
      { id: 6, name: "Николай Карпов", experience: false, phone: "", telegram: "@nik_karpov", note: "" },
      { id: 7, name: "Светлана Орлова", experience: true, phone: "+79995556677", telegram: "", note: "" },
      { id: 8, name: "Дмитрий Зайцев", experience: false, phone: "+79990001122", telegram: "@dima_zaitsev", note: "Доступен только вечером" },
      { id: 9, name: "Екатерина Лебедева", experience: true, phone: "", telegram: "@katya_lebeda", note: "" },
      { id: 10, name: "Алексей Морозов", experience: false, phone: "+79992223344", telegram: "", note: "" },
      { id: 11, name: "Ольга Павлова", experience: true, phone: "+79998887766", telegram: "@olga_pavlova", note: "Работала на крупных мероприятиях" },
      { id: 12, name: "Михаил Круглов", experience: false, phone: "", telegram: "@mikhail_kruglov", note: "" },
      { id: 13, name: "Татьяна Попова", experience: true, phone: "+79991112233", telegram: "", note: "" },
      { id: 14, name: "Андрей Фёдоров", experience: false, phone: "+79997775544", telegram: "@andrey_fedorov", note: "" },
      { id: 15, name: "Юлия Кузнецова", experience: true, phone: "", telegram: "", note: "Готова работать удаленно" },
    ]
  },
  getters: {
    getSections(state) {
      return state.sections;
    },
    getHeadquarters: (state) => state.headquarters,
    getRoleBySection: (state) => (sectionName, roleName) => {
      const section = state.sections.find((s) => s.name === sectionName);
      return section?.roles.find((role) => role.role === roleName) || null;
    },
    getVolunteersListBySectionShift: (state) => (sectionName, roleName, shiftTime) => {
      const section = state.sections.find((s) => s.name === sectionName);
      const role = section?.roles.find((role) => role.role === roleName) || null;
      const shift = role?.shifts.find((shift) => shift.time === shiftTime) || null; 
      const volunteers = shift?.volunteers || null;
      const required = shift?.required || 0;
      const experiencedCnt = shift?.experienced || 0

      const experienced = volunteers?.filter(person => person.experience) || [];   // уточняем, сколько есть опытных среди волонтеров
      const inexperienced = volunteers?.filter(person => !person.experience) || [];

      // формируем список вансий для смены
      const result = []
      for (let i = 0; i < experiencedCnt; i++) {
        const elem = {
          id: i+1,
          volunteer: {},
          experience: true, 
        }
        if (i < experienced.length) {
          elem.volunteer = experienced[i]
        } 
        result.push(elem);
      }
      
      // Формируем оставшиеся 5 элементов из списка inexperienced
      for (let i = experiencedCnt; i < required; i++) {
        const elem = {
          id: i+1,
          volunteer: {},
          experience: false, 
        }
        if (i < inexperienced.length) {
          elem.volunteer = inexperienced[i] 
        } 
        result.push(elem);
      }
      return result
    },
    getVolunteers: (state) => state.volunteers,
    isAuthenticated: (state) => state.isLoggedIn,
  },
  mutations: {
    addVolunteerToShift(state, { sectionName, shiftTime, role, volunteer }) {
      const section = state.sections.find((s) => s.name === sectionName);
      if (!section) return;

      const shift = section.shifts.find((s) => s.time === shiftTime);
      if (!shift) return;

      const roleData = shift.roles.find((r) => r.role === role);
      if (!roleData) return;

      roleData.volunteers.push(volunteer);
    },
    removeVolunteerFromShift(state, { sectionName, shiftTime, role, volunteerId }) {
      const section = state.sections.find((s) => s.name === sectionName);
      if (!section) return;

      const shift = section.shifts.find((s) => s.time === shiftTime);
      if (!shift) return;

      const roleData = shift.roles.find((r) => r.role === role);
      if (!roleData) return;

      roleData.volunteers = roleData.volunteers.filter((v) => v.id !== volunteerId);
    },
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {
    async fetchSections({ commit }) {
      // Пример: загрузка данных с API
      const response = await fetch('/api/sections');
      const sections = await response.json();
      commit('setSections', sections);
    },
    setSections(state, sections) {
      state.sections = sections;
    },
    login({ commit }) {
      commit("login");
    },
    logout({ commit }) {
      commit("logout");
    },
  },
});