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
                  { id: 1, name: "Иван Иванов", phone: "123456", notes: "" },
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
                  { id:2, name: "Царева Екатерина", phone: "+7900000000", notes: "" }
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
                  { id: 1, name: "Иван Иванов", phone: "123456", notes: "" },
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
                  { id:2, name: "Царева Екатерина", phone: "+7900000000", notes: "" }
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
                  { id: 1, name: "Иван Иванов", phone: "123456", notes: "" },
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
                  { id:2, name: "Царева Екатерина", phone: "+7900000000", notes: "" }
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
                required: 1,
                experienced: 1,
                volunteers: [
                  { id: 1, name: "Анна Петрова", phone: "789101", experience: true },
                ],
              },
              {
                time: "08:00-16:00",
                required: 1,
                experienced: 1,
                volunteers: [
                  { id: 1, name: "Анна Петрова", phone: "789101", experience: true },
                ],
              },
              {
                time: "16:00-00:00",
                required: 1,
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
                  { id: 1, name: "Анна Петрова", phone: "789101", experience: true },
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
    getShiftBySection: (state) => (sectionName, shiftTime) => {
      const section = state.sections.find((s) => s.name === sectionName);
      return section?.shifts.find((shift) => shift.time === shiftTime) || null;
    },
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