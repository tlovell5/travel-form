const form = document["user-form"]

//Submit Event

form.addEventListener("submit", function (event) {
    event.preventDefault()
    // alert("It's Working!")

    const firstName = form.firstName.value
    const lastName = form.lastName.value
    const age = form.age.value
    form.firstName.value = " "
    form.lastName.value = " "
    form.age.value = " "

    const checkedInputs = []

    for (let i = 0; i < form.restrictions.length; i++) {
        if (form.restrictions[i].checked) {
            checkedInputs.push(form.restrictions[i].value)
        }
    }

    alert(
        `First Name:  ${firstName}\nLast Name:  ${lastName}\nAge: ${age}\nGender: ${form.gender.value}\nDestination: ${form.city.value}\nRestrictions: ${checkedInputs}`)

    console.log(
        `First Name:  ${firstName}\nLast Name:  ${lastName}\nAge: ${age}\nGender: ${form.gender.value}\nDestination: ${form.city.value}\nRestrictions: ${checkedInputs}`)

    // console.log(
    //     " First Name: " + firstName, '\n',
    //     "Last Name: " + lastName, '\n',
    //     "Age: " + age, '\n',
    //     "Gender: " + form.gender.value, '\n',
    //     "Destination: " + form.city.value, '\n',
    //     "Restrictions: " + " " + checkedInputs)




    // alert( `First Name:  ${firstName}
    //     Last Name:  ${lastName}
    //     Age: ${age}
    //     Gender: ${form.gender.value}
    //     Destination: ${form.city.value}
    //     Restrictions: ${checkedInputs}`)




})