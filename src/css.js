// 模块化操作
const string = `
    .skin *{box-sizing: border-box; margin: 0; padding: 0;}
    .skin *::before,*::after{box-sizing: border-box;}
    .skin{
        position: relative;
        /* 占满全屏 */
        height: 100vh;
        background: #ffe600;
    }
    .nose{
        border: 10px solid black;
        border-color: black transparent transparent transparent;
        width: 0px;
        height: 0px;
        position: relative;
        left: 50%;
        top: 145px;
        margin-left: -10px;
        z-index: 10;
    }
    /* 将圆弧形相对于三角形定位 */
    .yuan{
        position: absolute;
        height: 6px;
        width: 20px;
        top: -16px;
        margin-left: -10px;
        /* border-radius的大小不会超过height */
        border-radius: 10px 10px 0 0;
        background: black;
    }
    /* 动鼻子 */
    @keyframes wave{
        0%{
            transform: rotate(0deg);
        }
        25%{
            transform: rotate(-5deg);
        }
        50%{
            transform: rotate(0deg);
        }
        75%{
            transform: rotate(5deg);
        }
        100%{
            transform: rotate(0deg);
        }
    }
    .nose:hover{
        /* 让鼻子围绕中间底部点抖动 */
        /* transform-origin: 50% bottom; */
        /*浮动 周期1s 永动 线性变化*/
        animation: wave 300ms infinite linear;
    }


    .eye::before{
        content: '';
        display: block;
        border: 3px solid #000;
        width: 30px;
        height: 30px;
        background: #fff;
        border-radius: 50%;
        position: absolute;
        left: 4px;
        top: 2px;
    }
    .eye{
        height: 64px;
        width: 64px;
        border: 2px solid #000;
        left: 50%;
        top: 100px;
        position: absolute;
        margin-left: -32px;
        background: #2e2e2e;
        border-radius: 50%;
    }
    .eye.left{
        transform: translateX(-100px);
    }
    .eye.right{
        transform: translateX(100px);
    }


    .mouth{
        /* border: 1px solid red; */
        height: 200px;
        width: 200px;
        position: relative;
        left: 50%;
        top: 170px;
        margin-left: -100px;
    }
    .mouth .up{
        position: relative;
        top: -20px;
        z-index: 1;
    }
    .mouth .up .lip{
        border: 3px solid black;
        height: 30px;
        width: 100px;
        border-top-color: transparent;
        border-right-color: transparent;
        position: relative;
        position: absolute;
        left: 50%;
        margin-left: -50px;
        background: #ffe600;
    }
    .mouth .up .lip.left{
        border-radius: 0 0 0 50px;
        transform: rotate(-15deg) translateX(-53px);
    }
    .mouth .up .lip.right{
        border-radius: 0 0 50px 0;
        transform: rotate(15deg) translateX(53px);
    }
    .mouth .up .lip::before{
        content: '';
        display: block;
        width: 7px;
        height: 30px;
        position: absolute;
        bottom: 0;
        background: #ffe600;
    }

    .mouth .up .lip.left::before{
        right: -6px;
    }
    .mouth .up .lip.right::before{
        left: -6px;
    }
    .mouth .down{
        height: 180px;
        position: absolute;
        top: 5px;
        width: 100%;
        /* 把多余的椭圆形舌头部分隐藏掉 */
        overflow: hidden;
    }
    .mouth .down .yuan1{
        border: 3px solid black;
        width: 150px;
        height: 1000px;
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -75px;
        border-radius: 75px/300px;
        background: #9b000a;
        overflow: hidden;
    }
    .mouth .down .yuan1 .yuan2{
        width: 200px;
        height: 296px;
        position: absolute;
        bottom: -155px;
        left: 50%;
        margin-left: -100px;
        border-radius: 100px;
        background: #ff485f;
    }


    .check{
        position: absolute;
        left: 50%;
        border: 3px solid black;
        width: 88px;
        height: 88px;
        top: 226px;
        margin-left: -44px;
        z-index: 3;
    }
    .check > img{
        top: 50%;
        left: 50%;
        position: absolute;
    }
    .check.left >img{
        transform: rotateY(180deg);
        transform-origin:0 0;
    }
    .check.left{
        transform: translateX(-180px); 
        background: #ff0000;
        border-radius: 50%;
    }
    .check.right{
        transform: translateX(180px);
        background: #ff0000;
        border-radius: 50%;
    }
    既然你诚心诚意的发问了
    我们便大发慈悲的告诉你
    为了防止世界被破坏
    为了维护世界的和平
    贯彻爱与真实的邪恶
    可爱又迷人的反派角色，武藏，小次郎
    我们是穿梭在银河中的火箭队
    白洞，白色的明天在等着我们
    就是这样! 喵~
`
export default string;