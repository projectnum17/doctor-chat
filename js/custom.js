//блок с комментариями
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

//Smooth Scroll
document.getElementById("scroll_id").addEventListener("click", function () {
	var targetElement = document.querySelector(this.getAttribute("data-scroll"));
	if (targetElement) {
		targetElement.scrollIntoView({ behavior: "smooth" });
	}
});

//Form
$(document).ready(function () {
	var selectedGender; // Gender
	var selectedAllergy; // Allergy

	//Gender
	$(document).on("click", ".chooseGenderM", function () {
		selectedGender = "Мужчина";
	});

	$(document).on("click", ".chooseGenderW", function () {
		selectedGender = "Женщина";
	});

	//Alergy
	$(document).on("click", "#yeas", function () {
		selectedAllergy = "Да";
	});

	$(document).on("click", "#no", function () {
		selectedAllergy = "Нет";
	});

	//отправка
	$("#order_form").submit(function (event) {
		event.preventDefault();

		var phoneNumber = $("#input-phone").val();
		var fullName = $("#input-name").val();
		var day = $("select[name='day']").val();
		var month = $("select[name='month']").val();
		var year = $("select[name='year']").val();

		// Valid phone
		if (
			!phoneNumber.startsWith("+38") ||
			!/^\+38\d+$/.test(phoneNumber) ||
			phoneNumber.length !== 13
		) {
			alert(
				'Номер телефона должен начинаться с "+38", содержать только цифры (без пробелов и других символов) и состоять из 13 символов.'
			);

			//Border
			$("#input-phone").css("border-color", "red");
			$("#input-phone").on("input", function () {
				var phoneNumberInput = $("#input-phone");
				phoneNumberInput.css("border-color", "");
			});
		} else {
			var formData = {
				Пол: selectedGender,
				ДатаРождения: day + "." + month + "." + year,
				Аллергия: selectedAllergy,
				Имя: fullName,
				Телефон: phoneNumber,
			};

			console.table(formData);

			$("#order_form")[0].reset();

			alert(
				"Форма успешно отправлена! Проверьте консоль для просмотра данных."
			);
		}
	});
});
