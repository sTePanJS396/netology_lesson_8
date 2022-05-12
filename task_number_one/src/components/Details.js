import React from 'react'

const Details = ({ info }) => {
    const [userData, setUserData] = React.useState({});
    const [isLoad, setIsLoad] = React.useState(true); 

    React.useEffect(() => {
        try {
            fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`)
            .then(res => res.json()).then(res => {setUserData(res); setIsLoad(false)})
        } catch (error) {
            alert('Ошибка!!!')
            console.log(error)
        }
    }, [info.id])

    return (
        <div className='details-block'>
            {isLoad === true ? <span>Загрузка...</span> :
            <ul className='details-list'>
                <li className='details-list__item'><img src={userData.avatar} alt='Картинка'/></li>
                <li className='details-list__item'>{userData.name}</li>
                <li className='details-list__item'>{userData.details?.city}</li>
                <li className='details-list__item'>{userData.details?.company}</li>
                <li className='details-list__item'>{userData.details?.position}</li>
            </ul>}
        </div>
    )
}

export default Details