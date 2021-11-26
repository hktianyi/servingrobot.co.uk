$('.videoPlay').on('click', function () {
    $('html,body').animate({
        scrollTop: 567
    }, 500) //567为距离顶部的高度，自测
    C.videoDialog({
        "mp4": "https://pudu-file-cdn.oss-accelerate.aliyuncs.com/website/video/kettybot/" + $(this).attr(
            "video-name") + '.mp4',
        "autoplay": true,
        // "height": 675,
        width: 1200
    })
    document.documentElement.style.overflow = "hidden";
})
gsap.registerPlugin(ScrollTrigger, TextPlugin)

// 全局
function overallTxt() {
    // gsap.from(['.letter .letter_h2_en', '.letter p'], {
    //   scrollTrigger: '.letter',
    //   duration: 0.5,
    //   opacity: 0,
    //   y: 100,
    //   stagger: 0.2,
    //   ease: 'power4'
    // })
    gsap.from(['.attra h2', '.attra p'], {
        scrollTrigger: '.attra',
        duration: 1,
        opacity: 0,
        y: 100,
        stagger: 0.2,
        ease: 'power4'
    })
    gsap.from(['.capacity h2', '.capacity p'], {
        scrollTrigger: '.capacity',
        duration: 1,
        opacity: 0,
        y: 100,
        stagger: 0.2,
        ease: 'power4'
    })
    gsap.from(['.recharge h2', '.recharge p'], {
        scrollTrigger: '.recharge',
        duration: 1,
        opacity: 0,
        y: 100,
        stagger: 0.2,
        ease: 'power4'
    })
    gsap.from('.bubble div', 1, {
        scrollTrigger: {
            scrub: 1,
            trigger: '.capacity .box h2',
            start: 'top bottom'
        },
        delay: 2,
        y: 80,
        opacity: 0,
        stagger: 0.1,
        ease: 'power4'
    })
}

// // 头部
function initHeader() {
    //   // 步骤隐藏
    let stl = gsap.timeline({
        // onComplete: myFunction,
        scrollTrigger: {
            trigger: '.header .top',
            scrub: 1,
            start: 'top top',
            pin: true
        }
    })
    stl.add('myLabel', '1')
    stl
        .to('.header_zh .top .logo', {
            x: '-31.25rem',
            duration: 1,
            ease: Power4
        })
        .to('.header_en .top .logo_en', {
            x: '-21rem',
            duration: 1,
            ease: Power4
        })
        .to(
            '.header .top .logo svg #path', {
                attr: {
                    fill: 'black'
                },
                duration: 1,
                ease: Power4
            },
            'myLabel'
        )
        .to(
            '.header .top .logo p', {
                color: '#000',
                // text: 'Delivery & Reception Robot with an ad display',
                x: 50
            },
            'myLabel'
        )
        .to(
            '.header_en .top .logo .desc_en', {
                color: '#000',
                // text: 'Delivery & Reception Robot with an ad display',
                x: 50,
                textAlign: 'left',
                marginLeft: '61px',
                marginTop: '18px',
                fontSize: '28px',
                width: '670px'
            },
            'myLabel'
        )
        .to(
            '.header .top .logo .desc_fr', {
                color: '#000',
                // text: 'Delivery & Reception Robot with an ad display',
                x: 50,
                textAlign: 'left',
                marginLeft: '61px',
                marginTop: '18px',
                fontSize: '28px',
                width: '640px'
            },
            'myLabel'
        )
        .to(
            '.header .top .logo .desc_ae', {
                color: '#000',
                // text: 'Delivery & Reception Robot with an ad display',
                x: -10,
                textAlign: 'left',
                marginLeft: '61px',
                marginTop: '18px',
                fontSize: '28px',
                width: '670px'
            },
            'myLabel'
        )
        .to(
            '.header_en .top .logo span', {
                x: -36,
                duration: 1,
                ease: Power4,
            },
            'myLabel'
        )

        // 视频消失
        .to(
            ['.header .top .mask', '.header .top video'], {
                opacity: 0,
                duration: 3
            },
            'myLabel'
        )
        // 产品进入
        .to(
            '.header .top .left', {
                // left: '876px',
                left: '47%',
                duration: 1,
                opacity: 1
            },
            'myLabel+=2'
        )
        .to(
            '.header .right', {
                left: '65%',
                duration: 1,
                position: 'fixed',
                opacity: 1
            },
            'myLabel+=2'
        )
}

function rigthPic() {
    let rigthPic = gsap.timeline({
        scrollTrigger: {
            scrub: 1,
            trigger: '.header ul',
            start: 'top bottom+=1430px',
            end: 'top center-=300px'
        }
    })
    rigthPic.staggerTo(
        '.header ul li',
        1.6, {
            y: -40,
            opacity: 1,
            ease: 'power4'
        },
        0.2,
        'myLabel +=4'
    )
    // .to(console.log($('.header .right').offset().top))
}

function firee() {
    ScrollTrigger.create({
        trigger: '.firee',
        start: 'top bottom',
        end: 'bottom bottom',
        onToggle: self => {
            console.log(self.direction)
            gsap.set('.header .right', {
                position: 'absolute',
                left: '65%',
                top: '2102px',
                opacity: 1
            })
        },
        onLeaveBack: ({
                          progress,
                          direction,
                          isActive
                      }) => {
            console.log(progress, direction, isActive)
            gsap.set('.header .right', {
                position: 'fixed',
                left: '65%',
                top: '95px',
                opacity: 1
            })
        }
    })

    var tm = new TimelineMax({
        delay: 2,
        scrollTrigger: {
            scrub: 1,
            trigger: '.firee',
            start: 'top bottom +=80%',
            end: 'bottom bottom',
            onToggle: self => {
                console.log('firee', self.direction)
            }
        }
    })
    tm.add('myLabel', '0')
    tm.to('.header .right', 3, {
        y: -500,
        ease: 'power4'
    })
    tm.from(
        '.firee .vid',
        2, {
            scale: 0.3
        },
        'myLabel'
    )
        .from(
            '.firee h2 ,.firee p',
            2, {
                opacity: 0,
                y: 120
            },
            'myLabel'
        )
        .to('.header .right', {
            opacity: 0
        })
}

// 营销大师
function marketing() {
    let tl = gsap.timeline({
        scrollTrigger: {
            scrub: 1,
            trigger: '.letter',
            start: 'bottom bottom',
            end: '200%',
            pin: true
        }
    })
    tl.add('sta', '1')
    tl.to('.banner', {
        duration: 1,
        opacity: 1
    })
        .to(
            // ['.letter >img', '.banner'], {
            //   // delay: 3,
            //   y: -200,
            //   duration: 1.8,
            //   scale: 20
            // },
            ['.letter .sadas .img_wrap'], {
                // delay: 3,
                y: 1000,
                duration: 1.8,
                scale: 20
            },
            'sta'
        )
        .to(
            ' .letter h2 , .letter .p', {
                y: '40vh'
            },
            'sta'
        )
        .to(
            ' .letter_h2_en, .letter .letter_p_en', {
                y: '24vh'
            },
            'sta'
        )
        .to(
            ' .letter>h2 , .letter .p', {
                color: '#ffffff'
            },
            'sta'
        )
        .to(
            '.letter .mask', {
                opacity: 0.6
            },
            'myLabel'
        )
        .staggerTo(
            ['.txt', '.txt h2', '.txt p'],
            2, {
                y: -100,
                opacity: 1,
                duration: 2,
                ease: 'power4'
            },
            1,
            'myLabel'
        )
}

// 语音交互
function capacity() {
    let tcl = gsap.timeline({
        scrollTrigger: {
            scrub: 1,
            trigger: '.capacity',
            start: 'bottom bottom'
        }
    })
    tcl.to('.bubble', {
        y: -100,
        opacity: 1,
        duration: 1,
        ease: 'power4'
    })
}

// 排队叫号
function queuing() {
    var queuing = gsap.timeline({
        scrollTrigger: {
            trigger: '.queuing',
            scrub: 1,
            start: 'top center',
            end: 'top center-=1000px'
        }
    })
    queuing.add('myLabel', '0')

    // top
    var qtm = new TimelineMax({
        delay: 2,
        scrollTrigger: {
            scrub: 1,
            trigger: '.queuing',
            start: 'top bottom',
            end: 'top center',
            onToggle: self => {
                // console.log('firee', self.direction)
            }
        }
    })
    qtm.add('myLabel', '0')
    qtm
        .from(
            '.queuing .pic',
            2, {
                scale: 0.3
            },
            'myLabel'
        )
        .from(
            '.queuing h2 ,.queuing p',
            2, {
                opacity: 0,
                y: 120
            },
            'myLabel'
        )
}

// 随心换
function satisfied() {
    let tdl = gsap.timeline({
        scrollTrigger: {
            trigger: '.satisfied',
            scrub: 1,
            start: 'bottom bottom',
            end: '300%',
            pin: true
        }
    })
    tdl
        .add('myLabel', '1')
        .to(
            '.satisfied  .side', {
                duration: 5,
                x: -400
            },
            'myLabel'
        )
        .to(
            '.satisfied .box .rear', {
                duration: 5,
                x: 400,
                opacity: 0
            },
            'myLabel'
        )
        .to(
            '.satisfied .box .p1', {
                duration: 5,
                opacity: 0
            },
            'myLabel'
        )
        .to(
            '.satisfied .box h2:nth-child(1)',
            2.5, {
                opacity: 0
            },
            'myLabel'
        )
        .to(
            '.satisfied .box h2:nth-child(2) , .satisfied .box .p2 ',
            2.5, {
                opacity: 1
            },
            'myLabel+=2.5'
        )
        .to(
            '.satisfied .box .tray', {
                opacity: 0.2,
                y: 100,
                duration: 5,
                ease: 'power0'
            },
            'myLabel+=5'
        )
        .to(
            '.satisfied .box .side', {
                x: 0,
                duration: 5,
                ease: 'power0'
            },
            'myLabel+=10'
        )
        .to(
            '.satisfied .box .tray', {
                opacity: 1,
                x: -456,
                duration: 5,
                ease: 'power0'
            },
            'myLabel+=10'
        )
        .to(
            ['.satisfied .box'], {
                y: -300,
                delay: 3,
                duration: 2,
                ease: 'power0'
            },
            'myLabel+=12'
        )
}

// 滑动
function introduce() {
    ScrollTrigger.create({
        trigger: '.introduce_zh',
        start: 'top top',
        end: 'bottom bottom',
        onEnter: () => {
            // console.log(self)
            gsap.set('.introduce_zh .vid', {
                position: 'fixed'
            })
        },
        onLeaveBack: ({
                          progress,
                          direction,
                          isActive
                      }) => {
            gsap.set('.introduce_zh .vid', {
                position: 'absolute'
            })
        },
        onLeave: () => {
            console.log('---------------')
            gsap.set('.introduce_zh .vid', {
                position: 'absolute',
                top: '2070px'
            })
        },
        onEnterBack: () => {
            gsap.set('.introduce_zh .vid', {
                position: 'fixed',
                top: '160px'
            })
        }
    })

    gsap.to('.introduce_zh .vt', 0.1, {
        scrollTrigger: {
            scrub: 1,
            trigger: '.introduce_zh .center',
            start: 'top center',
            end: 'bottom bottom'
        },
        opacity: 0
    })

    gsap.to('.introduce_zh .vc', 0.1, {
        scrollTrigger: {
            scrub: 1,
            trigger: '.introduce_zh .bottom',
            start: 'top center',
            end: 'bottom bottom'
        },
        opacity: 0
    })

    var htm = new TimelineMax({
        delay: 2,
        scrollTrigger: {
            scrub: 1,
            trigger: '.introduce_zh',
            start: 'top bottom',
            end: 'top center',
            onToggle: self => {
                console.log('firee', self.direction)
            }
        }
    })
    htm.add('myLabel', '0')
    // htm.from(
    //   '.introduce .vid',
    //   2,
    //   {
    //     scale: 0.3
    //   },
    //   'myLabel'
    // )
    htm
        .to(
            '.introduce_zh .vid', {
                opacity: 1
            },
            'myLabel'
        )
        .from(
            '.introduce_zh .vid',
            2, {
                scale: 0.3
            },
            'myLabel+=1'
        )

    ScrollTrigger.create({
        trigger: '.introduce_en',
        start: 'top top',
        end: 'bottom bottom',
        onEnter: () => {
            gsap.set('.introduce_en .vid', {
                position: 'fixed'
            })
        },
        onLeaveBack: ({
                          progress,
                          direction,
                          isActive
                      }) => {
            gsap.set('.introduce_en .vid', {
                position: 'absolute'
            })
        },
        onLeave: () => {
            console.log('---------------')
            gsap.set('.introduce_en .vid', {
                position: 'absolute',
                // top: '2070px'
                top: '1600px'
            })
        },
        onEnterBack: () => {
            gsap.set('.introduce_en .vid', {
                position: 'fixed',
                top: '160px'
            })
        }
    })

    gsap.to('.introduce_en .vt', 0.1, {
        scrollTrigger: {
            scrub: 1,
            trigger: '.introduce_en .bottom',
            start: 'top center',
            end: 'bottom bottom'
        },
        opacity: 0
    })

    var htm_en = new TimelineMax({
        delay: 2,
        scrollTrigger: {
            scrub: 1,
            trigger: '.introduce_en',
            start: 'top bottom',
            end: 'top center',
            onToggle: self => {
                console.log('firee', self.direction)
            }
        }
    })
    htm_en.add('myLabel', '0')
    htm_en
        .to(
            '.introduce_en .vid', {
                opacity: 1
            },
            'myLabel'
        )
        .from(
            '.introduce_en .vid',
            2, {
                scale: 0.3
            },
            'myLabel+=1'
        )
}


// 自动导航
function navigation() {
    var qtmr = new TimelineMax({
        delay: 2,
        scrollTrigger: {
            scrub: 1,
            trigger: '.navigation',
            start: 'top bottom+=80%',
            end: 'bottom bottom',
            onToggle: self => {
                console.log('firee', self.direction)
            }
        }
    })
    qtmr.add('myLabel', '0')
    qtmr
        .from(
            '.navigation .vid',
            2, {
                scale: 0.3
            },
            'myLabel'
        )
        .from(
            '.navigation h2 ,.navigation p',
            2, {
                opacity: 0,
                y: 390
            },
            'myLabel'
        )
}

// 多机器合作
function cooperation() {
    var qtmr = new TimelineMax({
        delay: 2,
        scrollTrigger: {
            scrub: 1,
            trigger: '.cooperation',
            start: 'top bottom+=80%',
            end: 'bottom bottom',
            onToggle: self => {
                console.log('firee', self.direction)
            }
        }
    })
    qtmr.add('myLabel', '0')
    qtmr
        .from(
            '.cooperation .vid',
            2, {
                scale: 0.3
            },
            'myLabel'
        )
        .from(
            '.cooperation h2 ,.cooperation p',
            2, {
                opacity: 0,
                y: 390
            },
            'myLabel'
        )
}

// 自动回充
function recharge() {
    var qtmr = new TimelineMax({
        delay: 2,
        scrollTrigger: {
            scrub: 1,
            trigger: '.energy',
            start: 'top bottom+=80%',
            end: 'bottom bottom',
            onToggle: self => {
                console.log('firee', self.direction)
            }
        }
    })
    qtmr.add('myLabel', '0')
    qtmr
        .from(
            '.energy .vid',
            2, {
                scale: 0.3
            },
            'myLabel'
        )
        .from(
            '.energy h2 ,.energy p',
            2, {
                opacity: 0,
                y: 390
            },
            'myLabel'
        )
    // let tel = gsap.timeline({
    //   delay: 1.2,
    //   scrollTrigger: {
    //     scrub: 1,
    //     trigger: '.recharge',
    //     start: 'top +=860'
    //   }
    // })
    // // '.satisfied .bottom .right img',
    // tel
    //   .to(
    //     '.satisfied .bottom .left .cell',
    //     {
    //       y: -3000,
    //       duration: 1
    //     },
    //     'myLabel'
    //   )
    //   .to(
    //     '.satisfied .bottom .right img',
    //     {
    //       y: -850,
    //       duration: 1
    //     },
    //     'myLabel'
    //   )
}

// 多彩配色
function colour() {
    gsap.from('.colour h2', {
        scrollTrigger: {
            scrub: 1,
            trigger: '.colour',
            start: 'top bottom+=20%',
            end: 'top center'
        },
        y: 600,
        opacity: 1,
        duration: 1
    })

    let tfl = gsap.timeline({
        scrollTrigger: {
            scrub: 1,
            trigger: '.colour',
            start: 'bottom bottom',
            pin: true
        }
    })
    tfl
        .add('myLabel', '1')
        // .from(
        //   '.colour h2',
        //   {
        //     y: 100,
        //     opacity: 0,
        //     duration: 1
        //   },
        //   'myLabel-=2'
        // )
        .to(
            '.colour .yellowjust', {
                bottom: '0%',
                duration: 1
            },
            'myLabel'
        )
        .from(
            '.colour .capsuleBottom', {
                y: -3000,
                x: -3000,
                opacity: 1,
                duration: 1
            },
            'myLabel+=1'
        )
        .from(
            '.colour .capsuleTop', {
                y: 3000,
                x: 3000,
                opacity: 1,
                duration: 1
            },
            'myLabel+=1'
        )
        .to(
            '.colour h2', {
                // y: -100,
                opacity: 0,
                duration: 1
            },
            'myLabel+=1'
        )
        .to(
            '.colour .yellowjust', {
                x: -120,
                opacity: 1,
                duration: 1
            },
            'myLabel+=1'
        )
        .to(
            '.colour .yellowagainst', {
                left: '55.5%',
                opacity: 1,
                duration: 1
            },
            'myLabel+=2'
        )
        .to(
            '.colour span', {
                opacity: 1,
                opacity: 1,
                duration: 1
            },
            'myLabel+=3'
        )
        .to(
            '.colour .whiteTop', {
                duration: 2,
                clipPath: 'polygon(-40% 0%, 100% 0%, 140% 100%, 0% 100%)'
            },
            'myLabel+=4'
        )
        .to(
            '.colour', {
                opacity: 1,
                // delay: 3,
                duration: 1
            },
            'myLabel+=6'
        )
}

// 观看影片
function vidOff() {
    $('.video').hide()
    $('.logo span').on('click', function () {
        $('.video').show()
    })
    $('.video').on('click', function () {
        $('.video').hide()
    })
}

function roll(t) {
    var ul1 = document.getElementById("child1");
    var ul2 = document.getElementById("child2");
    var ulbox = document.getElementById("parent");
    ul2.innerHTML = ul1.innerHTML;
    ulbox.scrollTop = 0; // 开始无滚动时设为0
    var timer = setInterval(rollStart, t); // 设置定时器，参数t用在这为间隔时间（单位毫秒），参数t越小，滚动速度越快
}

// 开始滚动函数
function rollStart() {
    var ul1 = document.getElementById("child1");
    var ul2 = document.getElementById("child2");
    var ulbox = document.getElementById("parent");
    // 正常滚动不断给scrollTop的值+1,当滚动高度大于列表内容高度时恢复为0
    if (ulbox.scrollTop >= ul1.scrollHeight) {
        ulbox.scrollTop = 0;
    } else {
        ulbox.scrollTop++;
    }
}

function init() {
    ''
    initHeader()
    rigthPic()
    firee()
    marketing()
    capacity()
    queuing()
    overallTxt()
    satisfied()
    introduce()
    recharge()
    colour()
    vidOff()
    cooperation()
    navigation()
    imgSize()
}

window.onload = () => {
    init()
}

// letter_robot尺寸
function imgSize() {
    // console.log('funufnufn')
    var w = $('#letter_robot').width()
    var h = $('#letter_robot').height()
    $(".banner").css("width", function () {
        return w * 0.58
    });

    $(".banner").css("top", function () {
        return h * 0.205
    });
    $(".banner").css("margin-left", function () {
        return -(w * 0.58) / 2
    });

    // console.log($('.banner').width())
}

window.onresize = imgSize
// up()
// new WOW().init()
// $(document).on('mousewheel DOMMouseScroll ', function (e) {
//   var delta =
//     (e.originalEvent.wheelDelta &&
//       (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||
//     (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1))
//   if (delta < 0) {
//     // 向下滚
//     up()
//   } else if (delta > 0) {
//     down()
//   }
// })
