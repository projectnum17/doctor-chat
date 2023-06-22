// Получаем ссылки на кнопку и контейнер с комментариями
var showMoreButton = document.getElementById("show-more-button");
var commentsContainer = document.getElementById("comments-container");

// Устанавливаем начальное значение счетчика комментариев и количество комментариев, которое нужно показывать при каждом нажатии
var commentCount = 3;
var commentsPerClick = 3;
showMoreButton.addEventListener("click", function () {
	var hiddenComments = document.querySelectorAll(".comment-item.hidden");

	for (var i = 0; i < commentsPerClick; i++) {
		if (hiddenComments[i]) {
			hiddenComments[i].classList.remove("hidden");
		}
	}

	//скрытие кнопки после показа свех комментариев
	if (hiddenComments.length <= commentsPerClick) {
		showMoreButton.style.display = "none";
	}

	// Перемещаем кнопку "Показать еще" вниз
	commentsContainer.appendChild(showMoreButton);
});

//якорь
document.getElementById("scroll_id").addEventListener("click", function () {
	var targetElement = document.querySelector(this.getAttribute("data-scroll"));
	if (targetElement) {
		targetElement.scrollIntoView({ behavior: "smooth" });
	}
});

//форма

/* $(document).ready(function () {
	$("#order_form").submit(function (event) {
		event.preventDefault(); // Отменяем отправку формы по умолчанию

		var phoneNumber = $("#input-phone").val();

		// Проверка условий валидации
		if (
			!phoneNumber.startsWith("+38") ||
			!/^\+38\d+$/.test(phoneNumber) ||
			phoneNumber.length !== 13
		) {
			// Если условия не выполняются, выводим сообщение об ошибке
			alert(
				'Номер телефона должен начинаться с "+38", содержать только цифры (без пробелов и других символов) и состоять из 13 символов.'
			);

			// Подсвечиваем поле красным цветом
			$("#input-phone").css("border-color", "red");
			$("#input-phone").on("input", function () {
				var phoneNumberInput = $("#input-phone");
				phoneNumberInput.css("border-color", ""); // Сбросить стиль рамки при изменении значения
			});
		} else {
			// Выводим данные формы в консоль (в табличном формате)
			var formData = $("#order_form").serializeArray();
			console.table(formData);

			// Отправляем форму с помощью AJAX
			$.ajax({
				url: $("#order_form").attr("action"),
				type: "POST",
				data: $("#order_form").serialize(),
				success: function (response) {
					// Форма отправлена успешно
					$("#order_form")[0].reset(); // Очищаем поля формы
					alert("Форма успешно отправлена! проверьте консоль");
				},
				error: function () {
					// Произошла ошибка при отправке формы
					alert("Проверьте консоль разработчика");
				},
			});
		}
	});
}); */
$(document).ready(function () {
	$("#order_form").submit(function (event) {
		event.preventDefault(); // Отменяем отправку формы по умолчанию

		var phoneNumber = $("#input-phone").val();

		// Проверка условий валидации
		if (
			!phoneNumber.startsWith("+38") ||
			!/^\+38\d+$/.test(phoneNumber) ||
			phoneNumber.length !== 13
		) {
			// Если условия не выполняются, выводим сообщение об ошибке
			alert(
				'Номер телефона должен начинаться с "+38", содержать только цифры (без пробелов и других символов) и состоять из 13 символов.'
			);

			// Подсвечиваем поле красным цветом
			$("#input-phone").css("border-color", "red");
			$("#input-phone").on("input", function () {
				var phoneNumberInput = $("#input-phone");
				phoneNumberInput.css("border-color", ""); // Сбросить стиль рамки при изменении значения
			});
		} else {
			// Выводим данные формы в консоль (в табличном формате)
			var formData = $("#order_form").serializeArray();
			console.table(formData);

			// Очищаем поля формы
			$("#order_form")[0].reset();

			// Показываем сообщение об успешной отправке
			alert(
				"Форма успешно отправлена! Проверьте консоль для просмотра данных."
			);
		}
	});
});
