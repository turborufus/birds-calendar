// src/services/shiftService.js

import api from './api';

export const getShifts = async () => {
  try {
    const response = await api.get('shifts'); // Используем API для получения данных (в данном случае, список постов)
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении данных: ', error);
    throw error;  // Пробрасываем ошибку для дальнейшей обработки
  }
};

export const getShiftById = (id) => {
    // Здесь мы можем позже делать запрос к API
    return { id, name: `Смена ${id}`, description: `Описание для смены ${id}` }
  }
  