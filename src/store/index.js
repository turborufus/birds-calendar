import { createStore } from 'vuex';

export default createStore({
  state: {
    sections: [
      {
        name: "ШТАБ",
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
  },
  getters: {
    getSections(state) {
      return state.sections;
    },
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
    }
  },
  mutations: {
    addVolunteer(state, { sectionName, shiftTime, role, volunteer }) {
      const section = state.sections.find((s) => s.name === sectionName);
      if (!section) return;

      const shift = section.shifts.find((s) => s.time === shiftTime);
      if (!shift) return;

      const roleData = shift.roles.find((r) => r.role === role);
      if (!roleData) return;

      roleData.volunteers.push(volunteer);
    },
    removeVolunteer(state, { sectionName, shiftTime, role, volunteerId }) {
      const section = state.sections.find((s) => s.name === sectionName);
      if (!section) return;

      const shift = section.shifts.find((s) => s.time === shiftTime);
      if (!shift) return;

      const roleData = shift.roles.find((r) => r.role === role);
      if (!roleData) return;

      roleData.volunteers = roleData.volunteers.filter((v) => v.id !== volunteerId);
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
  },
});