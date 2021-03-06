
import logo from '../assets/img/Product.svg';
import fonTitle from '../assets/img/Fontitle.png';
import btnLinkImg from '../assets/img/play.svg';
import notData from '../assets/img/amico.png';
import arrow from '../assets/img/arrow3.png';


export const baseDate = {

    wrapper: {
        width: "100%",
    },

    container: {
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto"
    },

    header: {
        logo: logo,
        link:  [
            {
                "name": "Product",
                "type": "link",
            },
            {
                "name": "Customers",
                "type": "link",
            },
            {
                "name": "Pricing",
                "type": "link",
            },
            {
                "name": "Resources",
                "type": "link",
            },  
            {
                "name": "Table",
                "type": "link",
            },  
        ],
        button: {
            name: [ 
                {
                    "name": "Sign In",
                    "type": "button",
                },
                {
                    "name": "Sign Up",
                    "type": "button",
                },
            ]
        },

        headerStyles :{ 

            headerContainer: {
                display:'flex', 
                alignItems: 'center',
                justifyContent: 'space-between'
    
            }, 
        
            nav : {
                display: "flex"
            },
    
            ul: {
                display: 'flex',
                alignItems: 'center',
                listStyle: 'none',
                marginTop: '15px',
                padding: "0"
            },
            
           li: {
                color: "#22343D",
                fontSize : "16px",
                cursor: "pointer",
                fontWeight: "400",
                marginLeft: "25px" ,
            },

            a: {
                color: "#22343D",
                fontSize : "16px",
                cursor: "pointer",
                fontWeight: "400",
                marginLeft: "25px",
                textDecoration: "none"
            },
    
            button: {
                color: "#02897A",
                fontSize : "16px",
                cursor: "pointer",
                fontWeight: "600",
                border: "1px solid #BCD0E5",
                padding: '10px 15px',
                borderRadius: "4px",
                marginLeft: "10px",
                background: "transparent",          
            }
        },
    
    },

    title : {
        style : {
            marginTop: "43px",
        },

        containerTitle: {
            style: {
                display: "flex",
                flexWrap: "wrap"
            }
        },

        titleImg: fonTitle,

        titleText: {
            title: "Work at the speed of thought",
            text: "Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.",

            style: {
                marginTop: "163px",
                width: "520px",
            },
    
            titleTextStyles: {
                title: {
                    fontSize: "40px",
                    fontWeight: "700",
                    color: '#22343D',
                    marginBottom: "18px",
                    width: "380px"
                },
                text : {
                    fontSize: "18px",
                    fontWeight: "400",
                    color: '#22343D',
                    width: "458px"
                }
            }
        },

        buttonBlock: {

            style: {
                display: 'flex',
                alignItems: 'center',
                marginTop: '50px'
            },


            button: [
                {
                    name: 'Get started',
                    type: 'button',
                    img: false
                },
                {
                    name: 'Watch the Video',
                    type: 'link',
                    img: true
                }
            ],
    
            buttonStyle: {
                color: "#fff",
                width: "175px",
                fontSize : "16px",
                cursor: "pointer",
                fontWeight: "700",
                padding: '10px 15px',
                borderRadius: "4px",
                background: "#02897A",
                border: "none",
                marginRight: "30px"
            },
    
            buttonLinkStyle: {
                display: "flex",
                alignItems: "center",
                color: "#02897A",
                width: "175px",
                fontSize : "16px",
                cursor: "pointer",
                background: "transparent",
                fontWeight: "700",
                border: "none",
            },
    
            buttonLinkImg : {
                img: btnLinkImg,
                style: {
                    marginRight: "8.5px",
                    display: "flex",
                    alignItems: "center",
                }
            }, 
        },
    },

    table: {

        button:{
            style: {

                boxBtnTable: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "5px"
                },

                changeRows:{
                    color: "#02897A",
                    fontSize : "16px",
                    cursor: "pointer",
                    fontWeight: "600",
                    border: "2px solid #02897A",
                    padding: '10px 15px',
                    borderRadius: "4px",
                    background: "#EDFFFC",  
                },

                create:{
                    color: "#fff",
                    fontSize : "16px",
                    cursor: "pointer",
                    fontWeight: "600",
                    border: "1px solid #4D8DFF",
                    padding: '10px 15px',
                    borderRadius: "4px",
                    marginLeft: "10px",
                    background: "#4D8DFF",  
                },

                update:{
                    color: "#fff",
                    fontSize : "16px",
                    cursor: "pointer",
                    fontWeight: "600",
                    border: "1px solid #740A76",
                    padding: '10px 15px',
                    borderRadius: "4px",
                    marginLeft: "10px",
                    background: "#740A76",  
                },

                delete:{
                    color: "#fff",
                    fontSize : "16px",
                    cursor: "pointer",
                    fontWeight: "600",
                    border: "1px solid #F03E3D",
                    padding: '10px 15px',
                    borderRadius: "4px",
                    marginLeft: "10px",
                    background: "#F03E3D",  
                },
            }
        },

        tableStyle: {

            container: {
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "1rem",
              },

              containerTable: {
                display: "flex",
                marginTop: "20px",
                flexDirection: "column",
                overflow: "auto", 
                height: "100%",
               
              },
              
              table: {
                borderCollapse: "collapse",
                margin: "0",
                width: "1200px",
                overflow: "auto",
              },

              tbody: {
                borderCollapse: "collapse",
                margin: "0",
                width: "1200px",
                overflow: "auto",
                height: "100%",
                maxHeight:  1200
              },

              thead: {
                borderRadius: "32px",
              },
              
              th: {
                backgroundColor: "#02897A", 
                border: "1px solid #ffffff",
                textAlign: "center",
                padding: "8px",
                fontSize: "20px",
                height: "50px",
               
              },
              
              td: {

                styleTd : {
                    backgroundColor: "#e9e6e6",
                    border: "1px solid #ffffff",
                    textAlign: "center",
                    width: "20px",
                    fontSize: "17px",
                    height: "50px",
                    fontWeight: "500",
                    cursor: "pointer"
                },

                styleTdActive : {
                    backgroundColor: "rgb(175 175 175)",
                    border: "1px solid #ffffff",
                    textAlign: "center",
                    color: "red",
                    width: "20px",
                    fontSize: "16px",
                    height: "50px",
                    fontWeight: "500",
                    cursor: "pointer"
                },

                polW:{
                    backgroundColor: "rgb(155 255 148)",
                    border: "1px solid #ffffff",
                    textAlign: "center",
                    width: "20px",
                    fontSize: "16px",
                    fontWeight: "500",
                    cursor: "pointer"
                },

                polM:{
                    backgroundColor: "#fffc94",
                    border: "1px solid #ffffff",
                    textAlign: "center",
                    width: "20px",
                    fontSize: "16px",
                    fontWeight: "500",
                    cursor: "pointer"
                },

                marriedYes:{
                    backgroundColor: "rgb(86 115 159)",
                    border: "1px solid #ffffff",
                    textAlign: "center",
                    width: "20px",
                    fontSize: "16px",
                    fontWeight: "500",
                    cursor: "pointer",
                    color: "#fff"
                },

                marriedNo:{
                    backgroundColor: "#ffe894",
                    border: "1px solid #ffffff",
                    textAlign: "center",
                    width: "20px",
                    fontSize: "16px",
                    fontWeight: "500",
                    cursor: "pointer"
                },

                arrowUp: {
                    width: "20px",
                    transform: "rotate(0deg)",
                    margin: "0 0 3px 10px",
                    cursor: "pointer"
                },

                arrowDown: {
                    width: "20px",
                    transform: "rotate(180deg)",
                    margin: "0 0 3px 10px",
                    cursor: "pointer"
                },

            },
        },

        nameColumns: [
            {
                "id": 1,
                "order": 1,
                "name": '???',
                "img": arrow,
                "property": 'id',
                "show" : true
            },
            {
                "id": 2,
                "order": 2,
                "name": "??????",
                "property": 'name',
                "show" : true
            },
            {
                "id": 3,
                "order": 3,
                "name": "??????",
                "property": 'pol',
                "show" : true
            },
            {
                "id": 4,
                "order": 4,
                "name": "??????????????",
                "property": 'tel',
                "show" : true
            },
            {
                "id": 5,
                "order": 5,
                "name": "??????????",
                "property": 'email',
                "show" : true
            }, 
            {
                "id": 6,
                "order": 6,
                "name": "??????????",
                "property": 'address',
                "show" : false
            }, 
            {
                "id": 7,
                "order": 7,
                "name": "?????????????? (??????????)",
                "property": 'married',
                "show" : false
            }, 
            
        ],

        rows: [
            {id:1, name: '?????????? ????????', pol: '??', tel: "8029-333-22-55", email: 'KPeamil@mail.com', address: "Minsk", married: true ? '????' : '??????'},
            {id:2, name: '?????????????? ????????', pol: '??', tel: "8029-222-11-55", email: 'IMeamil@mail.com', address: "Minsk", married: false ? '????' : '??????'},
            {id:3, name: '?????????? ??????????', pol: '??', tel: "8029-444-22-11", email: 'LAeamil@mail.com', address: "Minsk", married: true ? '????' : '??????'},
            {id:4, name: '???????????? ????????', pol: '??', tel: "8029-333-66-33", email: 'IPeamil@mail.com', address: "Minsk", married: true ? '????' : '??????'},
            {id:5, name: '???????????????? ??????????????????', pol: '??', tel: "8029-111-22-75", email: 'KAeamil@mail.com', address: "Minsk", married: false ? '????' : '??????'},
            {id:6, name: '???????????????????? ??????????', pol: '??', tel: "8029-332-44-58", email: 'MAeamil@mail.com', address: "Minsk", married: true ? '????' : '??????'},
            {id:7, name: '???????????????? ????????', pol: '??', tel: "8029-323-11-24", email: 'MAMeamil@mail.com', address: "Minsk", married: false ? '????' : '??????'},
            {id:8, name: '???????????? ????????????', pol: '??', tel: "8029-333-72-85", email: 'RVeamil@mail.com', address: "Minsk", married: true ? '????' : '??????'},
            {id:9, name: '?????????????? ??????????', pol: '??', tel: "8029-399-32-55", email: 'KMeamil@mail.com', address: "Minsk", married: true ? '????' : '??????'},
            {id:10, name: '?????????????????????? ????????????????', pol: '??', tel: "8029-999-11-95", email: 'KVeamil@mail.com', address: "Minsk", married: false ? '????' : '??????'},
            {id:11, name: '???????????? ??????????????', pol: '??', tel: "8029-455-88-77", email: 'MGeamil@mail.com', address: "Minsk", married: true ? '????' : '??????'},
            {id:12, name: '???????? ??????', pol: '??', tel: "8029-353-14-78", email: 'CYeamil@mail.com', address: "Minsk", married: true ? '????' : '??????'},
            {id:13, name: '?????????????????????? ??????????????', pol: '??', tel: "8029-313-55-22", email: 'VAeamil@mail.com', address: "Minsk", married: true ? '????' : '??????'},
            {id:14, name: '???????????????????? ???????????????? ', pol: '??', tel: "8029-123-77-55", email: 'SKeamil@mail.com', address: "Minsk", married: false ? '????' : '??????'},
            {id:15, name: '?????????????????? ??????????', pol: '??', tel: "8029-888-28-55", email: 'PDeamil@mail.com', address: "Minsk", married: true ? '????' : '??????'},
            {id:16, name: '?????????????????? ????????????', pol: '??', tel: "8029-303-12-85", email: 'KKeamil@mail.com', address: "Minsk", married: true ? '????' : '??????'},
            {id:17, name: '?????????????? ??????????????', pol: '??', tel: "8029-311-21-42", email: 'DVeamil@mail.com', address: "Minsk", married: false ? '????' : '??????'},
            {id:18, name: '???????????????? ??????????', pol: '??', tel: "8029-022-32-55", email: 'LOeamil@mail.com', address: "Minsk", married: true ? '????' : '??????'},
            {id:19, name: '???????????????? ????????????????', pol: '??', tel: "8029-333-22-00", email: 'CAeamil@mail.com', address: "Minsk", married: true ? '????' : '??????'},
            {id:20, name: '?????????????????? ????????????', pol: '??', tel: "8029-330-02-55", email: 'RKeamil@mail.com', address: "Minsk", married: true ? '????' : '??????'},
            {id:21, name: '?????????? ????????', pol: '??', tel: "8029-333-22-55", email: 'KPeamil@mail.com', address: "Minsk", married: true ? '????' : '??????'},
            {id:22, name: '?????????????? ????????', pol: '??', tel: "8029-222-11-55", email: 'IMeamil@mail.com', address: "Minsk", married: false ? '????' : '??????'},
            {id:23, name: '?????????? ??????????', pol: '??', tel: "8029-444-22-11", email: 'LAeamil@mail.com', address: "Minsk", married: true ? '????' : '??????'},
            {id:24, name: '???????????? ????????', pol: '??', tel: "8029-333-66-33", email: 'IPeamil@mail.com', address: "Minsk", married: true ? '????' : '??????'},
            {id:25, name: '???????????????? ??????????????????', pol: '??', tel: "8029-111-22-75", email: 'KAeamil@mail.com', address: "Minsk", married: false ? '????' : '??????'},
            {id:26, name: '???????????????????? ??????????', pol: '??', tel: "8029-332-44-58", email: 'MAeamil@mail.com', address: "Minsk", married: true ? '????' : '??????'},
            {id:27, name: '???????????????? ????????', pol: '??', tel: "8029-323-11-24", email: 'MAMeamil@mail.com', address: "Minsk", married: true ? '????' : '??????'},
            {id:28, name: '???????????? ????????????', pol: '??', tel: "8029-333-72-85", email: 'RVeamil@mail.com', address: "Minsk", married: false ? '????' : '??????'},
            {id:29, name: '?????????????? ??????????', pol: '??', tel: "8029-399-32-55", email: 'KMeamil@mail.com', address: "Minsk", married: true ? '????' : '??????'},
            {id:30, name: '?????????????????????? ????????????????', pol: '??', tel: "8029-999-11-95", email: 'KVeamil@mail.com', address: "Minsk", married: false ? '????' : '??????'},
            {id:31, name: '???????????? ??????????????', pol: '??', tel: "8029-455-88-77", email: 'MGeamil@mail.com', address: "Minsk", married: true ? '????' : '??????'},
            {id:32, name: '???????? ??????', pol: '??', tel: "8029-353-14-78", email: 'CYeamil@mail.com', address: "Minsk", married: true ? '????' : '??????'},
            {id:33, name: '?????????????????????? ??????????????', pol: '??', tel: "8029-313-55-22", email: 'VAeamil@mail.com', address: "Minsk", married: false ? '????' : '??????'},
            {id:34, name: '???????????????????? ???????????????? ', pol: '??', tel: "8029-123-77-55", email: 'SKeamil@mail.com', address: "Minsk", married: true ? '????' : '??????'},
            {id:35, name: '?????????????????? ??????????', pol: '??', tel: "8029-888-28-55", email: 'PDeamil@mail.com', address: "Minsk", married: true ? '????' : '??????'},
            {id:36, name: '?????????????????? ????????????', pol: '??', tel: "8029-303-12-85", email: 'KKeamil@mail.com', address: "Minsk", married: false ? '????' : '??????'},
            {id:37, name: '?????????????? ??????????????', pol: '??', tel: "8029-311-21-42", email: 'DVeamil@mail.com', address: "Minsk", married: true ? '????' : '??????'},
            {id:38, name: '???????????????? ??????????', pol: '??', tel: "8029-022-32-55", email: 'LOeamil@mail.com', address: "Minsk", married: true ? '????' : '??????'},
            {id:39, name: '???????????????? ????????????????', pol: '??', tel: "8029-333-22-00", email: 'CAeamil@mail.com', address: "Minsk", married: false ? '????' : '??????'},
            {id:40, name: '?????????????????? ????????????', pol: '??', tel: "8029-330-02-55", email: 'RKeamil@mail.com', address: "Minsk", married: true ? '????' : '??????'},
            {id:41, name: '?????????? ????????', pol: '??', tel: "8029-333-22-55", email: 'KPeamil@mail.com', address: "Minsk", married: false ? '????' : '??????'},
            {id:42, name: '?????????????? ????????', pol: '??', tel: "8029-222-11-55", email: 'IMeamil@mail.com', address: "Minsk", married: true ? '????' : '??????'},
            {id:43, name: '?????????? ??????????', pol: '??', tel: "8029-444-22-11", email: 'LAeamil@mail.com', address: "Minsk", married: false ? '????' : '??????'},
            {id:44, name: '???????????? ????????', pol: '??', tel: "8029-333-66-33", email: 'IPeamil@mail.com', address: "Minsk", married: true ? '????' : '??????'},
            {id:45, name: '???????????????? ??????????????????', pol: '??', tel: "8029-111-22-75", email: 'KAeamil@mail.com', address: "Minsk", married: true ? '????' : '??????'},
            {id:46, name: '???????????????????? ??????????', pol: '??', tel: "8029-332-44-58", email: 'MAeamil@mail.com', address: "Minsk", married: false ? '????' : '??????'},
            {id:47, name: '???????????????? ????????', pol: '??', tel: "8029-323-11-24", email: 'MAMeamil@mail.com', address: "Minsk", married: false ? '????' : '??????'},
            {id:48, name: '???????????? ????????????', pol: '??', tel: "8029-333-72-85", email: 'RVeamil@mail.com', address: "Minsk", married: false ? '????' : '??????'},
            {id:49, name: '?????????????? ??????????', pol: '??', tel: "8029-399-32-55", email: 'KMeamil@mail.com', address: "Minsk", married: true ? '????' : '??????'},
            {id:50, name: '?????????????????????? ????????????????', pol: '??', tel: "8029-999-11-95", email: 'KVeamil@mail.com', address: "Minsk", married: true ? '????' : '??????'},
            {id:51, name: '???????????? ??????????????', pol: '??', tel: "8029-455-88-77", email: 'MGeamil@mail.com', address: "Minsk", married: false ? '????' : '??????'},
            {id:52, name: '???????? ??????', pol: '??', tel: "8029-353-14-78", email: 'CYeamil@mail.com', address: "Minsk", married: false ? '????' : '??????'},
            {id:53, name: '?????????????????????? ??????????????', pol: '??', tel: "8029-313-55-22", email: 'VAeamil@mail.com', address: "Minsk", married: false ? '????' : '??????'},
            {id:54, name: '???????????????????? ???????????????? ', pol: '??', tel: "8029-123-77-55", email: 'SKeamil@mail.com', address: "Minsk", married: false ? '????' : '??????'},
            {id:55, name: '?????????????????? ??????????', pol: '??', tel: "8029-888-28-55", email: 'PDeamil@mail.com', address: "Minsk", married: false ? '????' : '??????'},
            {id:56, name: '?????????????????? ????????????', pol: '??', tel: "8029-303-12-85", email: 'KKeamil@mail.com', address: "Minsk", married: false ? '????' : '??????'},
            {id:57, name: '?????????????? ??????????????', pol: '??', tel: "8029-311-21-42", email: 'DVeamil@mail.com', address: "Minsk", married: false ? '????' : '??????'},
            {id:58, name: '???????????????? ??????????', pol: '??', tel: "8029-022-32-55", email: 'LOeamil@mail.com', address: "Minsk", married: false ? '????' : '??????'},
            {id:59, name: '???????????????? ????????????????', pol: '??', tel: "8029-333-22-00", email: 'CAeamil@mail.com', address: "Minsk", married: true ? '????' : '??????'},
            {id:60, name: '?????????????????? ????????????', pol: '??', tel: "8029-330-02-55", email: 'RKeamil@mail.com', address: "Minsk", married: false ? '????' : '??????'},
        ],

      

        pagination: {
            style: {
                container: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "20px 0",
                },

                ul: {
                    listStyle: "none",
                    display: "flex",
                    margin: "0",
                    padding: "0",
                    flexWrap: "wrap"
                },

                li: {
                    margin: "10px  20px",
                    cursor: "pointer",
                    border: "2px solid rgb(2, 137, 122)",
                    borderRadius: "10px",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                },

                liActive: {
                    margin: "10px  20px",
                    cursor: "pointer",
                    color: "#fff",
                    border: "2px solid rgb(2, 137, 122)",
                    borderRadius: "10px",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    background: "rgb(2, 137, 122)",
                    justifyContent: "center"
                },

                p: {
                    margin: "0",
                    fontWeight: "600",
                    fontSize: "18px"
                },

                button: {
                    border: "2px solid rgb(2, 137, 122)",
                    borderRadius: "10px",
                    margin: "10px  40px",
                    fontWeight: "600",
                    fontSize: "18px",
                    width: "80px",
                    height: "40px",
                    background: "transparent",
                    text : [
                        {name: "??????????", type: "button"},
                        {name: "????????????", type: "button"},
                    ]
                }
                
            }
        }
    },

    boxMenu: {

        containerTable: {
            display: "flex",
            flexDirection: "column",
        },

        style: {
            display: "flex",
            alignItems: "center"
        },

        countersLength: {
            fontSize: "18px",

            allLength: {    
                display: "flex",
                justifyContent: "end"
            },
    
            textLength: {
                text: "?????????? ????????????????????: ",
            },

            textTotal: {
                text: "????????????????????: ",
            },
            
            number: {
                color: "rgb(2, 137, 122)"
            }
        },

        search: {
            input: {
                width: "250px",
                height: "40px",
                outline: "none",
                borderRadius: "5px",
                border: "2px solid rgb(2, 137, 122)",
                paddingLeft: "5px",
                fontSize: "18px",
                margin: "20px 0",
                marginRight: "25px"
            },
    
            text:[
                {name : "?????????? ???? ??????????...", type: "name" },
                {name : "???????????????? ????????????????????...", type: "num" },
            ]
        },
    
        select : {

            container:{

                styleContainer: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                },

                p: {
                    style: {
                        fontSize: "18px",
                        fontWeight: "500"
                    },

                    text: [
                        {text: "?????????? ???? ????????", type: "pol"},
                        {text: "???????????????? ????????????????????", type: "num"},
                    ],
                    
                },

                strong: {
                    style: {
                        color: "rgb(2, 137, 122)",
                        fontSize: "18px"
                    }
                }
            },

            selectStyle: {
                height: "40px",
                border: "2px solid rgb(2, 137, 122)",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "5px",
                marginBottom: "10px"
            },

            options: [
                { value: 'M', label: '??' },
                { value: 'W', label: '??' },
                { value: 'all', label: '??????' },
            ],

            colors: { 
                select1 : {color : "rgb(131 215 205)"},
                select2 : {color : "rgb(2, 137, 122)"},
            }
        }
    },

    modalContextMenu: {

        style: {
            width: "100vw",
            height: "100vh",
            position: "fixed",
            top: "0",
            left: "0",
            opacity: "0",
            pointerEvents: "none",
            transition: ".5s"
        },

        styleActive: {
            width: "100vw",
            height: "100vh",
            position: "fixed",
            top: "0",
            left: "0",
            opacity: "1",
            transition: ".5s",
            pointerEvents: "all"
        },

        contentStyle: {
            padding: "20px",
            borderRadius: "2px",
            background: "#f5f5f5",
            width: "300px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        },

        button: {

            style: {

                container: {
                    display:"flex", 
                    flexDirection: "column",
                    alignItems: "center"
                },

                button: {
                    width: "200px", 
                    border: "none",
                    background: "transparent"
                }
            }
        }
    },

    modal: {

        style: {
            width: "100vw",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.4)",
            position: "fixed",
            top: "0",
            left: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: "0",
            pointerEvents: "none",
            transition: ".5s"
        },

        styleActive: {
            width: "100vw",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.4)",
            position: "fixed",
            top: "0",
            left: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: "1",
            transition: ".5s",
            pointerEvents: "all"
        },

        styleALLModal: {

            modalDelete: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
            }
        },


        
        contentStyle: {
            padding: "20px",
            borderRadius: "10px",
            background: "#fff",
            width: "37vw"

        },

        modalInDb: {

            style: {

               ul: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                },

                li: {
                    listStyle: "none",
                    marginBottom: "10px",
                    fontSize: "18px",
                    display: "flex",
                    justifyContent: "space-between"
                },

                liCheckbox: {
                    marginRight: "10px",
                },

                liLabel: {
                    fontSize: "20px",
                    fontWeight: "500",
                    cursor: "pointer",
                },

                polContainer: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "156%"
                },

                span: {
                    fontWeight: "500"
                },

                title: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "20px",
                    color: "rgb(2, 137, 122)"
                },
            }
        }
    },

    notData: {
        img: notData,

        text: "?????? ????????????",

        style: {
            container: {
                display: "flex",
                marginTop: "200px",
                alignItems: "center",
                justifyContent: "center"
            },

            blockContent: {
                marginLeft: "70px"
            },

            text: {
                fontSize: "50px",
                color: "#22343D",
                marginBottom: "20px"
            },

            button: {
                width: "140px",
                height: "50px",
                borderRadius: "10px",
                background: "#02897A",
                border: "none",
                color: "#fff",
                fontSize: "20px",
                fontWeight: "500",
                text: "??????????????????"
            }
        }
    }

};