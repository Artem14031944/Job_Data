import React,{ useState, useMemo, useEffect } from 'react';
import Select from '../../Select/Select';
import Pagination from '../../Pagination/Pagination';
import ModalWindow from '../../Modal/Modal';
import ContextMenu from '../../ContextMenu/ContextMenu';
import PodContextMenu from '../../PodContextMenu/PodContextMenu';
import NotData from '../../NotData/NotData';


export default function TableData({ 
        baseDate,
        active,
        posts,
        setActive,
        value, 
        valueNum,
        currentPosts,
        postsPerPage,
        setPostsPerPage, 
        totalPosts, 
        paginate, 
        prevPage,
        setPost,
        currentPage,
        activeContextMenu,
        setActiveContextMenu,
        activePodContextMenu,
        setActivePodContextMenu,
        setPolName, 
        nextPage }) {

  
    // Хранилище данных 
    const [pol, setPol] = useState('');
    const [length, setLength] = useState('');
    const [pageShow] = useState();
    const [modalVariant, setModalVariant] = useState('');
    const [podVariant, setPodVariant] = useState('');
    const [activeRow, setActiveRow] = useState(false);
    const [activeData, setActiveData] = useState([]);
    const [order, setOrder] = useState('ASC');
    const [currentCol, setCurrentCol] = useState(null);
    const [columns, setColumns] = useState(baseDate.table.nameColumns);
    const [checked, setChecked] = useState(columns.map(i => i.show));
    const [positionConX, setPositionConX] = useState('');
    const [positionConY, setPositionConY] = useState('');
 

    // Инпуты модального окна создание
    const [valueName, setValueName] = useState('');
    const [valuePol, setValuePol] = useState('');
    const [valuePhone, setValuePhone] = useState('');
    const [valueEmail, setValueEmail] = useState('');
    const [valueAddress, setValueAddress] = useState('');
    const [valueMarried, setValueMarried] = useState('');

    // Валидация 
    const [inputNameDirty, setInputNameDirty] = useState('');
    const [inputPolDirty, setInputPolDirty] = useState('');
    const [inputPhoneDirty, setInputPhoneDirty] = useState('');
    const [inputEmailDirty, setInputEmailDirty] = useState('');
    const [inputNameError, setInputNameError] = useState('Поле не может быть пустым');
    const [inputPolError, setInputPolError] = useState('Выберите пол');
    const [inputPhoneError, setInputPhoneError] = useState('Поле не может быть пустым');
    const [inputEmailError, setInputEmailError] = useState('Поле не может быть пустым');


    // Итог показ по количеству
    let filteredLengths = currentPosts.filter((n, i) => !length || i + 1 <= length);

    // Функции филтрации по имени
    let filterContacts = filteredLengths.filter(contact => contact.name.toLowerCase().includes(value.toLowerCase()));

    // Получение значения полов
    const allPol = [ "Все", "Ж", "М" ];

    // Количество на показ
    const allLengthFilters = [ 5, 10, 15, 20, 25];

    // Функция показ по полу
    const onPolChange = e => setPol(e.target.value);

    // Функция показ по количеству
    const onPageShowChange = e => setLength(e.target.value); 

    // Фича
    const bag = "bag";

    // Текст тля итогов
    const textTotal = baseDate.boxMenu.countersLength.textTotal.text;
    const textLength = baseDate.boxMenu.countersLength.textLength.text;

    // Стили 
    const style = {
        containerTable: baseDate.table.tableStyle.containerTable,
        table: baseDate.table.tableStyle.table,
        tbody: baseDate.table.tableStyle.tbody,
        thead: baseDate.table.tableStyle.thead,
        th: baseDate.table.tableStyle.th,
        td: baseDate.table.tableStyle.td.styleTd,
        tdActive: baseDate.table.tableStyle.td.styleTdActive,
        tdM: baseDate.table.tableStyle.td.polM,
        tdW: baseDate.table.tableStyle.td.polW,
        tdMarriedY: baseDate.table.tableStyle.td.marriedYes,
        tdMarriedN: baseDate.table.tableStyle.td.marriedNo,
        arrowUp: baseDate.table.tableStyle.td.arrowUp,
        arrowDown: baseDate.table.tableStyle.td.arrowDown,
        select: baseDate.boxMenu.select.selectStyle,
        strong: baseDate.boxMenu.countersLength.number,
        p: baseDate.boxMenu.countersLength,
        allLength: baseDate.boxMenu.countersLength.allLength,
        modal: baseDate.modal.style,
        modalDelete: baseDate.modal.styleALLModal.modalDelete,
        modalActive: baseDate.modal.styleActive,
        contentStyle: baseDate.modal.contentStyle,
        modalInDb: baseDate.modal.modalInDb.style.ul,
        modalInDbList: baseDate.modal.modalInDb.style.li,
        modalInDbListSpan: baseDate.modal.modalInDb.style.span,
        modalInDbTitle: baseDate.modal.modalInDb.style.title,
        modalInDbCheckbox: baseDate.modal.modalInDb.style.liCheckbox,
        modalInDbLabel: baseDate.modal.modalInDb.style.liLabel,
        polContainer: baseDate.modal.modalInDb.style.polContainer,
        boxBtnTable: baseDate.table.button.style.boxBtnTable,
        btnChangeRows: baseDate.table.button.style.changeRows,
        btnCreate: baseDate.table.button.style.create,
        btnUpdate: baseDate.table.button.style.update,
        btnDelete: baseDate.table.button.style.delete,
        contextModalContent: baseDate.modalContextMenu.button.style.container,
        contextModalButton: baseDate.modalContextMenu.button.style.button,
    };

    // Условия что бы не потерять данные
    if(filterContacts === null || filterContacts.length === 0 || !baseDate) {
        currentPage = 1;
        filterContacts = posts;
    };


    // Состояние длины массива
    useEffect(() => {
        if(length) {
            function pushLength () {
                setPostsPerPage(length)
            };
            pushLength();
        } 
    }, [length]);

    // Состояние пола массива
    useEffect(() => {
        if(pol) {
            function pushPol () {
                setPolName(pol)
            };
            pushPol();
        } 
    }, [pol]);

    // Состояне скролла 
    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)

        return function() {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, []);


    // Цвет фона ряда
    const styleRows = styleRows => {

        if (styleRows === 'М')  {
            return style.tdM
        }
        if ( styleRows === 'Ж') {
            return style.tdW
        }
        if (styleRows === 'да') {
            return style.tdMarriedY
        }
        if (styleRows === 'нет') {
            return style.tdMarriedN
        } else {
            return style.td
        }
    };
    
    // Текст для селектов
    const textSelect = type => {
        if(type === 'pol') {
            return baseDate.boxMenu.select.container.p.text[0].text
        } else if (type === 'num') {
            return baseDate.boxMenu.select.container.p.text[1].text
        }
    };

    // Выбор модального окна
    const setModal = variant => setModalVariant(variant);

    // Выбор модального под окна
    const podSetModal = podVariant => setPodVariant(podVariant);

    // Выбранный элемент 
    const changeRow = item => {
        if(item) {
            setActiveData(item);
            setActiveRow(true);
        }
    };

    // Для формы
    const handleOnSubmit = event => event.preventDefault();

    // Добавить обект в  массив
    const pushArr = (valueName, valuePol, valuePhone, valueEmail, valueAddress, valueMarried) => {

        let indexLast = posts[posts.length -1];
        let obj = {
            id: indexLast.id + 1,
            name: valueName,
            pol: valuePol,
            tel: valuePhone,
            email: valueEmail,
            address: valueAddress,
            married: valueMarried
        };
        
        if(
            obj.name.length !== 0  && 
            obj.tel.length !== 0  &&  
            obj.pol.length !== 0  && 
            obj.email.length !== 0 &&
            obj.address.length !== 0 &&
            obj.married.length !== 0 
        ) {
            setPost([...posts, obj]);
            setActive(false);

            // Читска полей
            setValueName("");
            setValuePol("");
            setValuePhone("");
            setValueEmail("");
            setValueAddress("");
            setValueMarried("");

            // Убирает ошибки
            setInputNameDirty(false);
            setInputPolDirty(false);
            setInputPhoneDirty(false);
            setInputEmailDirty(false);

        }   
        else {
           setInputNameDirty(true);
           setInputPolDirty(true);
           setInputPhoneDirty(true);
           setInputEmailDirty(true);
        }
    };

    // Получение значения свойства
    const getValue = prop => { 
        return currentPosts.reduce((res, obj) => {
            if (obj.id == activeData.id) {
                return obj[prop];
             } else {
                return res;
             }
          }, '');
    };

    // Изменить выброный элемент
    const change = (prop, e) => { 
        setPost(currentPosts.map(obj => {
            if (obj.id == activeData.id) {
               return {...obj, [prop]: e.target.value};
            } else {
               return obj;
            }
         }));
    };

    // Сохранить изменение при радактирование 
    const saveChange = () => {
        setActive(false);
        setActiveData("");
    };

    // Удалить выброный элемент
    const deleteItem = () => {
        if(activeData) {
            let itemDeleteIndex = activeData.id
            function deleteItemFromArr(arr, index ) {
                setActiveData([]);
                setActiveRow(false);
                return arr.filter(item => item.id !== index);
            }
            filterContacts = deleteItemFromArr(filterContacts, itemDeleteIndex);
            setPost(filterContacts);
            setActive(false);
        }
    };
    
    //Отмена в модальном окне
    const cancel = () => setActive(false);   
    
    // Валидация полей модального окна
    const validationsModal = e => {
        switch(e.target.name) {
            case 'name':
                return setInputNameDirty(true);
                break;
            case 'pol':
                return setInputPolDirty(true);
                break;
            case 'phone':
                return setInputPhoneDirty(true);
                break;
            case 'email':
                return setInputEmailDirty(true);
                break;
                default:
                return 
        }
    };

    // Выбор колонок из списка
    const handlerCheckbox = (e, arr, item) => {
        setChecked(e.target.checked)

        let target = e.target.checked;
        const objIndex = arr.findIndex((obj => obj.id === item.id));
        arr[objIndex].show = target;
        
        setColumns(arr);
    };

     //Виды модальных под окон
    const getPodModalActive = () => {
        switch(podVariant) {
            case "do":
                return (
                     <div 
                        style={style.contextModalContent}   
                        onMouseLeave={() => setActivePodContextMenu(false)}
                     >
                        <button 
                            style={style.contextModalButton}
                            name="open"
                            onClick={activeRow ? () => {
                                setModal("open")
                                setActivePodContextMenu(false)
                                setActive(true)
                                if(activeContextMenu) {
                                    setActiveContextMenu(false)
                                }
                            } : null}
                        >
                            Открыть
                    </button>
                        {/* <button 
                            style={style.contextModalButton}
                            name="create"
                            onClick={() => {
                                setModal("create")
                                setActive(true)
                                setActivePodContextMenu(false)
                                if(activeContextMenu) {
                                    setActiveContextMenu(false)
                                }
                            }}
                        >
                            Добавить
                        </button> */}
                        <button 
                            style={style.contextModalButton}
                            name="update"
                            onClick={activeRow ? () => {
                                setModal("update")
                                setActivePodContextMenu(false)
                                setActive(true)
                                if(activeContextMenu) {
                                    setActiveContextMenu(false)
                                }
                            }: null}
                        >
                            Редактировать
                        </button>
                        <button 
                            style={style.contextModalButton}
                            name="delete"
                            onClick={activeRow ? () => {
                                setModal("delete")
                                setActivePodContextMenu(false)
                                setActive(true)
                                if(activeContextMenu) {
                                    setActiveContextMenu(false)
                                }
                            }: null}
                        >
                            Удалить
                        </button>
                    </div>
                );
                break;
            case "view":
                    return (
                         <div 
                            style={style.contextModalContent}   
                            onMouseLeave={() => setActivePodContextMenu(false)}
                         >
                            <button 
                                style={style.contextModalButton}
                                name="changeRows"
                                onClick={(e) => {
                                    setModal("changeRows")
                                    setActive(true)
                                    setActivePodContextMenu(false)
                                    if(activeContextMenu) {
                                        setActiveContextMenu(false)
                                    }
                                }}
                            >
                                Варианты колонок
                            </button>
                        </div>
                    );
                    break;
            default:
                return
        }
    };

 
    //Виды модальных окон
    const getModalActive = () => { 
        switch(modalVariant) {
            case "contextMenu": 
            return (
                <ul>
                    <li>
                        <p  
                            onMouseOver={(e) => {
                                podSetModal("do")
                                setActivePodContextMenu(true)
                            }}
                        > 
                           Действия
                        </p>
                    </li>
                    <li>
                        <p
                            onMouseOver={(e) => {
                                podSetModal("view")
                                setActivePodContextMenu(true)
                            }}
                        >
                           Вид
                        </p>
                       
                    </li>
                    <li onClick={() => console.log('Условия')}>
                        <p>Условия</p>
                    </li>
                    <li onClick={() => console.log('Сортировка')}>
                        <p>Сортировка</p>
                    </li>
                </ul>
               
            );
            break;
            case "changeRows": 
            return (
                <div>
                    <h4 style={style.modalInDbTitle}>Варианты колонок</h4>
                    <ul style={style.modalInDb}>
                        {columns?.map((item, index) => {
                            return (
                                <li 
                                    style={style.modalInDbList} 
                                    key={index}
                                    draggable={true}
                                    onDragStart={e => dragStartHandler(e, item)}
                                    onDragLeave={e => dragEndHandler(e)}
                                    onDragEnd={e => dragEndHandler(e)}
                                    onDragExit={e => dragOverHandler(e)}
                                    onDragOver={e => onDragOver(e)}
                                    onDrop={e => dropHandler(e, item)}
                                >
                                    <label style={style.modalInDbLabel}>
                                        <input 
                                            style={style.modalInDbCheckbox}
                                            type="checkbox"  
                                            name="check" 
                                            value={item.name}
                                            defaultChecked={item.show}
                                            onClick={e => handlerCheckbox(e, columns, item)}
                                        />
                                        {item.name}
                                    </label>
                                </li>
                            )
                        })}
                    </ul>
                    <div style={style.modalDelete}>
                        <button style={style.btnCreate} onClick={cancel}>Ок</button>
                    </div>
                </div>
            );
            break;
            case "open": 
                return (
                    <div>
                        <h4 style={style.modalInDbTitle}>Информация об пользователе</h4>
                        <ul style={style.modalInDb}>
                            <li style={style.modalInDbList}>
                                Номер: <span style={style.modalInDbListSpan}>{activeData?.id}</span>
                            </li>
                            <li style={style.modalInDbList}>
                                ФИО: <span style={style.modalInDbListSpan}> {activeData?.name}</span>
                            </li>
                            <li style={style.modalInDbList}>
                                Пол: <span style={style.modalInDbListSpan}>{activeData?.pol}</span>
                            </li>
                            <li style={style.modalInDbList}>
                                Телефон: <span style={style.modalInDbListSpan}> {activeData?.tel}</span>
                            </li>
                            <li style={style.modalInDbList}>
                                Почта: <span style={style.modalInDbListSpan}> {activeData?.email}</span>
                            </li>
                            <li style={style.modalInDbList}>
                                Адрес: <span style={style.modalInDbListSpan}> {activeData?.address}</span>
                            </li>
                            <li style={style.modalInDbList}>
                                Замужем (Женат): <span style={style.modalInDbListSpan}> {activeData?.married}</span>
                            </li>
                        </ul>
                        <div style={style.modalDelete}>
                            <button style={style.btnDelete} onClick={cancel}>Отмена</button>
                        </div>
                    </div>
                );
                break;
            case "create": 
                return (
                        <form  id="myForm" onSubmit={handleOnSubmit}>
                            <h4 style={style.modalInDbTitle}>Добавить пользователя</h4>
                            <ul style={style.modalInDb}>
                                <li style={style.modalInDbList}>
                                    <div>
                                        {(inputNameDirty && inputNameError) && <span style={{color:'red'}}>{inputNameError}</span> }
                                        <input 
                                            type="text" 
                                            name="name"
                                            onBlur={e => validationsModal(e)}
                                            placeholder="ФИО" 
                                            style={style.select} 
                                            value={valueName || ''}
                                            onChange={e => nameHandler(e)}
                                        />
                                    </div>
                                </li>
                                <li style={style.modalInDbList}>
                                    <div>
                                        {(inputPolDirty && inputPolError) && <span style={{color:'red'}}>{inputPolError}</span> }
                                        <div style={style.polContainer}>
                                            <span>Пол:</span>
                                            <select 
                                                name="pol"
                                                onBlur={e => validationsModal(e)} 
                                                id="" 
                                                value={valuePol || ''} 
                                                onChange={e => polHandler(e)}
                                                style={style.select} 
                                            >
                                                <option value="">Выбрать</option>
                                                <option value="М">М</option>
                                                <option value="Ж">Ж</option>
                                            </select>
                                        </div>
                                    </div>
                                </li>
                                <li style={style.modalInDbList}>
                                    <div>
                                        {(inputPhoneDirty && inputPhoneError) && <span style={{color:'red'}}>{inputPhoneError}</span> }
                                        <input 
                                            type="text" 
                                            name="phone"
                                            onBlur={e => validationsModal(e)}
                                            placeholder="Телефон" 
                                            style={style.select} 
                                            value={valuePhone || ''}
                                            onChange={e => phoneHandler(e)}
                                        />
                                    </div>
                                </li>
                                <li style={style.modalInDbList}>
                                    <div>
                                    {(inputEmailDirty && inputEmailError) && <span style={{color:'red'}}>{inputEmailError}</span> }
                                        <input 
                                            type="email"
                                            name="email"
                                            onBlur={e => validationsModal(e)}
                                            placeholder="Почта" 
                                            style={style.select} 
                                            value={valueEmail || ''}
                                            onChange={e => emailHandler(e)}
                                        />
                                    </div>
                                </li>
                                <li style={style.modalInDbList}>
                                    <div>
                                    {(inputEmailDirty && inputEmailError) && <span style={{color:'red'}}>{inputEmailError}</span> }
                                        <input 
                                            type="email"
                                            name="address"
                                            onBlur={e => validationsModal(e)}
                                            placeholder="Адресс" 
                                            style={style.select} 
                                            value={valueAddress || ''}
                                            onChange={e => addressHandler(e)}
                                        />
                                    </div>
                                </li>
                                <li style={style.modalInDbList}>
                                    <div>
                                        {(inputPolDirty && inputPolError) && <span style={{color:'red'}}>{inputPolError}</span> }
                                        <div style={style.polContainer}>
                                            <span>Замужем (Женат):</span>
                                            <select 
                                                name="married"
                                                onBlur={e => validationsModal(e)} 
                                                id="" 
                                                value={valueMarried || ''} 
                                                onChange={e => marriedHandler(e)}
                                                style={style.select} 
                                            >
                                                <option value="">Выбрать</option>
                                                <option value="да">да</option>
                                                <option value="нет">нет</option>
                                            </select>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div style={style.modalDelete}>
                                <button 
                                    style={style.btnCreate} 
                                    type = "submit" 
                                    form ="myForm"
                                    onClick={() => pushArr(valueName, valuePol, valuePhone, valueEmail, valueAddress, valueMarried)}
                                >
                                    Сохранить
                                </button>
                                <button style={style.btnDelete} onClick={cancel}>Отмена</button>
                            </div>
                        </form>
                        );
                    break;
            case "update": 
                return (
                        <div>
                            <h4 style={style.modalInDbTitle}>Редактировать пользователя</h4>
                            <ul style={style.modalInDb}>
                                <li style={style.modalInDbList}>
                                    <span>ФИО:</span>
                                    <input 
                                        type="text" 
                                        placeholder="ФИО" 
                                        value={getValue('name') || ""} 
                                        style={style.select}
                                        onChange={e => change('name', e)}
                                    />
                                </li>
                                <li style={style.modalInDbList}>
                                    <span>Пол:</span>
                                    <select 
                                        name="" 
                                        id="" 
                                        value={getValue('pol') || ""} 
                                        onChange={e => change(('pol'), e)}
                                        style={style.select} 
                                    >
                                        <option value="М" >М</option>
                                        <option value="Ж">Ж</option>
                                    </select>
                                </li>
                                <li style={style.modalInDbList}>
                                    <span>Телефон:</span>
                                    <input 
                                        type="text" 
                                        placeholder="Телефон" 
                                        value={getValue('tel') || ""} 
                                        style={style.select}
                                        onChange={e => change(('tel'), e)}
                                    />
                                </li>
                                <li style={style.modalInDbList}>
                                    <span>Почта:</span>
                                    <input 
                                        type="email" 
                                        placeholder="Почта" 
                                        value={getValue('email') || ""} 
                                        style={style.select}
                                        onChange={e => change(('email'), e)}
                                    />
                                </li>
                            </ul>
                            <div style={style.modalDelete}>
                                <button type="submit" style={style.btnCreate} onClick={saveChange}>Сохранить</button>
                                <button style={style.btnDelete} onClick={cancel}>Отмена</button>
                            </div>
                        </div>
                        );
                    break;
            case "delete": 
                return (
                    <div>
                        <h4 style={style.modalInDbTitle}>Удалить пользователя</h4>
                        <div style={style.modalDelete}>
                            <button style={style.btnDelete} onClick={deleteItem}>Да</button>
                            <button style={style.btnCreate} onClick={cancel}>Нет</button>
                        </div>
                    </div>
                );
                break;
            default:
            return
        };
    };


    // Валидация для инпутов в модальном окне
    const nameHandler = e => {
        setValueName(e.target.value);

        if(e.target.value.length === 0) {
            setInputNameError('Введите имя и фамилию')
        } else {
            setInputNameError('')
        }
    };

    const polHandler = e => {
        setValuePol(e.target.value);

        if(e.target.value.length === 0) {
            setInputPolError('Выберите пол')
        } else {
            setInputPolError('')
        }
    };

    const phoneHandler = e => {
        setValuePhone(e.target.value);

        const re = /^\d[\d\(\)\ -]{4,14}\d$/

        if(!re.test(Number(e.target.value))) {
            setInputPhoneError('Только цифры')
        } else {
            setInputPhoneError('')
        }
    };

    const emailHandler = e => {
        setValueEmail(e.target.value)
        const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!re.test(String(e.target.value).toLocaleLowerCase())) {
            setInputEmailError('Некорректно введена почта');
        } else {
            setInputEmailError('');
        }
    };

    const addressHandler = e => {
        setValueAddress(e.target.value);

        if(e.target.value.length === 0) {
            setInputNameError('Введите имя и фамилию')
        } else {
            setInputNameError('')
        }
    };

    const marriedHandler = e => {
        setValueMarried(e.target.value);

        if(e.target.value.length === 0) {
            setInputNameError('Введите имя и фамилию')
        } else {
            setInputNameError('')
        }
    };

    // Стрелка в колонке
    const styleImg = item => {
        if(item === 'ASC') {
            return style.arrowUp
        }
        if(item === 'DSC') {
            return style.arrowDown
        }
    };

    // Сортиврока даные таблицы
    const sorting = nameCol => {
        if(order === 'ASC') {
            const sorted = [...currentPosts].sort((a, b) => {
              return  a[nameCol]?.toLowerCase() > b[nameCol]?.toLowerCase() ? 1 : -1 
            });
            setPost(sorted);
            setOrder('DSC');  
        }
        if(order === 'DSC') {
            const sorted = [...currentPosts].sort((a, b) => {
              return  a[nameCol]?.toLowerCase() < b[nameCol]?.toLowerCase() ? 1 : -1 
            });
            setPost(sorted);
            setOrder('ASC');  
        }
    };

    const onDragOver = e => {
        e.stopPropagation();
        e.preventDefault();
    };

    const dragStartHandler = (e, col) => setCurrentCol(col);

    const dragEndHandler = e => {
        e.target.style.color = 'yelow'
    };

    const dragOverHandler = e => {
        e.preventDefault();
        e.target.style.color = 'yelow'
    };

    const dropHandler = (e, col) => {
        e.preventDefault();
            
        setColumns(columns?.map(c => {
                if(c.id === col.id) {
                    return {...c, order: currentCol.order}
                }
                if(c.id === currentCol.id) {
                    return {...c, order: col.order}
                }
                return c
            }))
            e.target.style.color = '#000'
       
    };

    // Сортировка колонок
    const sortCol = (a, b) => a.order > b.order ? 1 : -1;

    //  Вызов контекст меню
    const showContextMenu = e => {
        e.preventDefault();
        setPositionConY(e.clientY);
        setPositionConX(e.clientX);
        setModal("contextMenu");
        setActiveContextMenu(true);
    }; 

    // Закрыть контекст меню
    const closeContextMenu = e => {
        if(e.button !== 2) {
            setActiveContextMenu(false);
        };
    };

    // Закрыть  контекст меню при скролле
      const scrollHandler = e => {
        if(e.target.documentElement.scrollHeight - e.target.documentElement.scrollTop) {
            setActiveContextMenu(false);
            setActivePodContextMenu(false);
        }
    };


    return (
        <div> 
            {/* Общее количество людей  */}
            <div style={style.allLength}>  
                <p style={style.p}>{textLength}<strong style={style.strong}>{posts.length}</strong></p>
            </div>

            {/* Итог в данный момент */}
                <div style={style.allLength}>  
                    <p style={style.p}>{textTotal}<strong style={style.strong}>{filterContacts.length}</strong></p>
                </div>  
                
            {/* Селект пол */}
            <Select  
                baseDate={baseDate}
                value={pol}  
                onChange={onPolChange} 
                style={style.select} 
                all={allPol}  
                textSelect={textSelect(baseDate.boxMenu.select.container.p.text[0].type)}
            />

            {/* Селект количество на показ */}
            <Select  
                bag={bag}
                baseDate={baseDate}
                value={pageShow}  
                onChange={onPageShowChange} 
                style={style.select} 
                all={allLengthFilters}  
                textSelect={textSelect(baseDate.boxMenu.select.container.p.text[1].type)}
            />

            {/* Таблица */}
            <div style={style.containerTable, !valueNum ? {maxHeight: "100%"} : {maxHeight: (valueNum * 50.5) + 50 , overflow: "auto"}}> 
            <div style={style.boxBtnTable}>
                <div>
                    <button 
                        style={style.btnChangeRows} 
                        name="changeRows"
                        onClick={(e) => {
                            setModal("changeRows")
                            setActive(true)
                            if(activeContextMenu) {
                                setActiveContextMenu(false)
                            }
                        }}
                    >
                        Варианты колонок
                    </button>
                </div>
                <div>
                    <button 
                        style={style.btnCreate} 
                        name="open"
                        onClick={activeRow ? () => {
                            setModal("open")
                            setActive(true)
                        } : null}
                    >
                    Открыть
                    </button>
                    <button 
                        style={style.btnCreate} 
                        name="create"
                        onClick={() => {
                            setModal("create")
                            setActive(true)
                        }}
                    >
                        Добавить
                    </button>
                    <button 
                        style={style.btnUpdate}
                        name="update"
                        onClick={activeRow ? () => {
                            setModal("update")
                            setActive(true)
                        }: null}
                    >
                        Редактировать
                    </button>
                    <button 
                        style={style.btnDelete}
                        name="delete"
                        onClick={activeRow ? () => {
                            setModal("delete")
                            setActive(true)
                        }: null}
                    >
                        Удалить
                    </button>
                </div>
            </div>
                <table 
                    style={style.table} 
                    onContextMenu={e => showContextMenu(e)}
                    onClick={e => closeContextMenu(e)}
                >
                    {/* Колонки */}
                    <thead style={style.thead}>
                        <tr>
                            {
                                columns?.sort(sortCol).map((col, index) => 
                                col.show === true ?
                                    <th 
                                        style={style.th} 
                                        key={index}
                                        onDragStart={e => dragStartHandler(e, col)}
                                        onDragLeave={e => dragEndHandler(e)}
                                        onDragEnd={e => dragEndHandler(e)}
                                        onDragExit={e => dragOverHandler(e)}
                                        onDragOver={e => onDragOver(e)}
                                        onDrop={e => dropHandler(e, col)}
                                        draggable={true}
                                        onClick={() => sorting(col.name)}
                                    >
                                        {col.show === true ? col.name : null}
                                        {col ? <img src={col.img} alt={''} style={styleImg(order)}/> : null}
                                    </th> : null
                                )
                            }
                        </tr>
                    </thead>

                    {/* Ряды*/}
                    <tbody style={style.tbody}>
                        {
                            filterContacts.map((item, index) => 
                                <tr 
                                    key={index} 
                                    style={activeData.id === item.id ?  style.tdActive : null}
                                >
                                    { 
                                        columns.map(col => 
                                            col.show === true ? 
                                            <td 
                                                style={styleRows(item[col.property])} 
                                                key={col.id}
                                                onClick={() => changeRow(item)}
                                                onContextMenu={() => changeRow(item)}
                                            
                                                onDoubleClick={activeRow ? () => {
                                                    setModal("open")
                                                    setActive(true)
                                                    } : null
                                                }
                                            >
                                                {item[col.property]}
                                            </td>
                                            : null
                                        )
                                    }
                                </tr>
                            )
                        }
                    </tbody>
                </table> 
            </div>
            {active && 
                <ModalWindow 
                    baseDate={baseDate} 
                    active={active} 
                    setActive={setActive}
                >
                    { getModalActive() }
                </ModalWindow>
            } 
            {activeContextMenu &&
                <ContextMenu
                    baseDate={baseDate} 
                    activeContextMenu={activeContextMenu}
                    setActiveContextMenu={setActiveContextMenu}
                    positionX={positionConX}
                    positionY={positionConY}
                >
                    { getModalActive() }
                </ContextMenu>
            }
            {activePodContextMenu &&
                <PodContextMenu
                    baseDate={baseDate} 
                    activePodContextMenu={activePodContextMenu}
                    setActivePodContextMenu={setActivePodContextMenu}
                    positionX={positionConX}
                    positionY={positionConY}
                >
                   { getPodModalActive() }
                </PodContextMenu>
            }
            {/* Пагинация */}
            <Pagination 
                currentPosts={currentPosts}
                baseDate={baseDate}
                postsPerPage={postsPerPage}
                totalPosts={totalPosts}
                paginate={paginate}
                prevPage={prevPage}
                nextPage={nextPage}
                currentPage={currentPage}
            />
        </div>
    );
};
