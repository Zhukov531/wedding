// Установите дату свадьбы
    const weddingDate = new Date('September 14, 2024 00:00:00').getTime();

    // Обновляйте таймер каждую секунду
    const countdown = setInterval(function() {

      // Получите текущую дату и время
      const now = new Date().getTime();

      // Найдите разницу между датой свадьбы и текущей датой
      const distance = weddingDate - now;

      // Вычислите дни, часы, минуты и секунды
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Отобразите результат в HTML
      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;

      // Если обратный отсчет завершен, отобразите сообщение
      if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "Свершилось!";
      }
    }, 1000);