function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function (submittedUser){
            return goodUsers.some ( function (goodUser) {
                return goodUser.id === submittedUser.id;
            })
        })
    }
}

module.exports = checkUsersValid

// проверить принадлежит ли элемент хотя бы одному значению
// массива хороших пользователей 
// с помощью метода для каждого элемента