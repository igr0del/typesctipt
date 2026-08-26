enum Gender {
    Male = "male",
    Female = "female"
}

interface User {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    gender: Gender;
    email: string;
}

interface UsersResponse {
    users: User[];
}

async function getUsers(): Promise<void> {
    try {
        const response = await fetch("https://dummyjson.com/users");

        if (!response.ok) {
            throw new Error(`Ошибка запроса: ${response.status}`);
        }

        const data: UsersResponse = await response.json();

        data.users.forEach((user: User) => {
            console.log(
                `ID: ${user.id}, ` +
                `Имя: ${user.firstName} ${user.lastName}, ` +
                `Возраст: ${user.age}, ` +
                `Пол: ${user.gender}, ` +
                `Email: ${user.email}`
            );
        });
    } catch (error) {
        if (error instanceof Error) {
            console.log(`Произошла ошибка: ${error.message}`);
        } else {
            console.log("Произошла неизвестная ошибка");
        }
    }
}

getUsers();