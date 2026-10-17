document.addEventListener('DOMContentLoaded', () => {

  // 1. Очистка полей при открытии модалки
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    modal.addEventListener('show.bs.modal', () => {
      // Находим все инпуты внутри этой модалки и очищаем их
      const inputs = modal.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        if (input.type === 'checkbox' || input.type === 'radio') {
          input.checked = false;
        } else {
          input.value = '';
        }
      });
      // Убираем старые сообщения об успехе, если они там были
      const oldAlert = modal.querySelector('.alert-success');
      if (oldAlert) oldAlert.remove();
    });
  });

  // 2. Обработка отправки (и в модалке, и на странице order.html)
  const submitButtons = document.querySelectorAll('.btn-submit-order');

  submitButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault(); // Ничего не перезагружаем

      // Ищем ближайшую форму или модалку, к которой относится кнопка
      const container = button.closest('.modal-body') || button.closest('.modal-content') || button.closest('form') || button.closest('.card-body');
      if (!container) return;

      // Находим все обязательные поля
      const inputs = container.querySelectorAll('input[required]');
      let isValid = true;

      // Проверяем валидацию
      inputs.forEach(input => {
        if (!input.checkValidity()) {
          isValid = false;
          input.reportValidity(); // Показываем подсказку браузера
        }
      });

      if (!isValid) return; // Если есть ошибки — дальше не идём

      // Создаём красивое сообщение об успехе
      const alertDiv = document.createElement('div');
      alertDiv.className = 'alert alert-success alert-dismissible fade show mt-3';
      alertDiv.setAttribute('role', 'alert');
      alertDiv.innerHTML = `
        <strong>Успешно!</strong> Заявка отправлена. Мы свяжемся с вами.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Закрыть"></button>
      `;

      // Вставляем сообщение в начало формы (чтобы было видно)
      const form = container.querySelector('form') || container;
      form.parentNode.insertBefore(alertDiv, form);

      // Очищаем поля
      const allInputs = container.querySelectorAll('input, textarea, select');
      allInputs.forEach(input => {
        if (input.type === 'checkbox' || input.type === 'radio') {
          input.checked = false;
        } else {
          input.value = '';
        }
      });

      // Если это модалка — закрываем её через 1.5 секунды, чтобы человек увидел надпись
      const modalElement = button.closest('.modal');
      if (modalElement) {
        setTimeout(() => {
          const modal = bootstrap.Modal.getInstance(modalElement);
          if (modal) modal.hide();
        }, 1500);
      }
    });
  });
});