import React, {useState} from 'react'

function Stateuser() {
    //State Tanımlama (Objects)
    const [user, setUser] = useState({name: ' ', age: '', title: ''})

    //State Güncelleme Fonksiyonu (Objects)
    const updateUser = () =>{
        setUser({name: 'Rojhat Birel', age: 25, title: 'Frontend Developer 🚀'})
    }

    //State Users
    const iniusers = [
        {name: 'Rojhat Birel', age: 25, title: 'Frontend Developer 🚀'},
        {name: 'Ali Demirci', age: 55, title: 'Backend Developer 🚀'},
        {name: 'Veli Tarhan', age: 35, title: 'Full Stack Developer 🚀'},
        {name: 'Ayşe Sağlam', age: 25, title: 'DevOps Engineer 🚀'}
    ];
    //State Tanımlama (Arrays)
    const [users, setUsers] = useState(iniusers);

    //State Güncelleme Fonksiyonu (Arrays)
    const updateUsers = () => {
        const name1 = prompt('Yeni Kullanıcı Adı: ');
        const age1 = prompt('Yeni Kullanıcı Yaşı: ');
        const title1 = prompt('Yeni Kullanıcı Ünvanı: ');
        setUsers([...users, { name: name1, age: age1, title: title1 }]);
    };

  return (
    <div>
        <h1>useState Update User (Objects)</h1>
        <div>
            <strong>Name:</strong> {user.name} <strong>Age: </strong> {user.age} <strong>Title: </strong>{user.title}
            <br></br>
            <br></br>
            <button onClick={updateUser}>Call The Best Developer</button>
            <hr></hr>
        </div>
        <h1>useState Update User (Arrays)</h1>
        <h2>Users List</h2>
            <div>
            <ol>
                {users.map((user, index) => (
                    <li key={index}>
                        <strong>Name:</strong> {user.name}, <strong>Age:</strong> {user.age}, <strong>Title:</strong> {user.title}
                    </li>
                ))}
            </ol>
            <button onClick={updateUsers}>Yeni Kullanıcı Ekle</button>
            </div>
    </div>
  )
}

export default Stateuser