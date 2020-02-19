import React from 'react';
import cls from './Users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, followed: false, name: { firstName: 'Ivan', secondName: 'Gavruliyk' }, location: { city: 'Ivano-Frankivsk', country: 'Ukraine' }, age: 15, status: 'i am svarschik', img: 'https://s.yimg.com/uu/api/res/1.2/DdytqdFTgtQuxVrHLDdmjQ--~B/aD03MTY7dz0xMDgwO3NtPTE7YXBwaWQ9eXRhY2h5b24-/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-11/7b5b5330-112b-11ea-a77f-7c019be7ecae' },
            { id: 2, followed: true, name: { firstName: 'Sasha', secondName: 'Faraon' }, location: { city: 'Lviv', country: 'Ukraine' }, age: 45, status: 'i am povar', img: 'https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340' },
            { id: 3, followed: false, name: { firstName: 'Alexey', secondName: 'Udovenko' }, location: { city: 'Kiev', country: 'Ukraine' }, age: 21, status: 'i am gey', img: 'https://media.istockphoto.com/photos/hands-forming-a-heart-shape-with-sunset-silhouette-picture-id636379014?k=6&m=636379014&s=612x612&w=0&h=tnYrf_O_nvT15N4mmjorIRvZ7lK4w1q1c7RSfrVmqKA=' }
        ]);
    }


    return (
        <div>
            {
                props.users.map((user) => <div className={cls.userItem} key={user.id}>
                    <div className={cls.ava}>
                        <img src={user.img} alt="ava" />
                        {user.followed ? <button onClick={() => { props.unfollow(user.id) }}> Unfollow </button> : <button onClick={() => { props.follow(user.id) }}> Follow </button>}
                    </div>
                    <div>
                        <p>{user.name.firstName}</p>
                        <p>{user.location.city}</p>
                        <p>{user.age}</p>
                    </div>
                </div>
                )
            }
        </div>
    );
}

export default Users;