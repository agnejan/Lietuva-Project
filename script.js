function visit() {
        let name = prompt("What is your name?");
        let email = prompt("What is your email address?");
        let country = prompt("Where do you live?");

        if (name.length > 0 && email.length > 0) {
          alert(
            "Thank you " +
              name +
              "! We will be in touch soon. We look forward to welcoming you in Lithuania from " +
              country +
              " ! 😊✈"
          );
        } else {
          alert(
            "Thank you! Unfortunately we did not get your full details, please fill in again and we will be in touch with you soon!"
          );
        }
      }
      let visitButton = document.querySelector(".visit-button");
      visitButton.addEventListener("click", visit);