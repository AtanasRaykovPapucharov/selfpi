$(() => {
    const templateLoader = () => {
        function _compile(templateUrl) {
            return new Promise(resolve => {
                $.get(templateUrl, htmlTemplate => {
                    let compiledTemplate = Handlebars.compile(htmlTemplate)
                    resolve(compiledTemplate)
                })
            })
        }
        return {
            load: (selector, templateUrl, data) => {
                let selectedItem = $(selector)
                data = data || Object
                return _compile(templateUrl).then((compiledTemplate) => {
                    selectedItem.html(compiledTemplate(data))
                })
            }
        }
    }
    const view = {
        body: (selector, data) => {
            return templateLoader().load(selector, 'html/body.html', data)
        },
        spirit: (selector, data) => {
            return templateLoader().load(selector, 'html/spirit.html', data)
        },
        mind: (selector, data) => {
            return templateLoader().load(selector, 'html/mind.html', data)
        },
        home: (selector, data) => {
            return templateLoader().load(selector, 'html/home.html', data)
        },
        blog: (selector, data) => {
            return templateLoader().load(selector, 'html/blog.html', data)
        },
        about: (selector, data) => {
            return templateLoader().load(selector, 'html/about.html', data)
        },
        videos: (selector, data) => {
            return templateLoader().load(selector, 'html/videos.html', data)
        },
        books: (selector, data) => {
            return templateLoader().load(selector, 'html/books.html', data)
        },
        carousel: (selector, data) => {
            return templateLoader().load(selector, 'html/carousel.html', data)
        }
    }
    const router = new Navigo(null, true)
    let $body = $('body')
    let $wrapper = $('body .wrapper')
    let $sentence = $('body .wrapper header.sentence h2')
    router
        .on({
            "home": () => {
                view.home("#more", {}).then(() => {
                    $body.css({
                        'background-image': 'url(' + "images/sunrise.jpg" + ')'
                    })
                    $wrapper.css({
                        'background-size': '0 0',
                        'opacity': '1',
                        'box-shadow': '0 0 40px black'
                    })
                    $sentence.css({
                        'color': 'rgb(79, 62, 79)',
                        'text-shadow': '-1px 1px rgba(241, 223, 179, 1)'
                    })
                })
            },
            "body": () => {
                view.body("#more", {})
            },
            "spirit": () => {
                view.spirit("#more", {})
            },
            "mind": () => {
                view.mind("#more", {}) 
                // view.carousel("#content", {
                    //     name: "Mudras",
                    //     data: [{
                    //             img: "images/mus/1.png",
                    //             name: "PATHAKAM"
                    //         },
                    //         {
                    //             img: "images/mus/2.png",
                    //             name: "MUDRAKHYAM"
                    //         },
                    //         {
                    //             img: "images/mus/3.png",
                    //             name: "KATAKAM"
                    //         },
                    //         {
                    //             img: "images/mus/4.png",
                    //             name: "MUSHTI"
                    //         },
                    //         {
                    //             img: "images/mus/5.png",
                    //             name: "KARTHARIMUGHAM"
                    //         },
                    //         {
                    //             img: "images/mus/6.png",
                    //             name: "SUKATUNDAM"
                    //         },
                    //         {
                    //             img: "images/mus/7.png",
                    //             name: "KAPITHAKAM"
                    //         },
                    //         {
                    //             img: "images/mus/8.png",
                    //             name: "HAMSAPAKSHAM"
                    //         },
                    //         {
                    //             img: "images/mus/9.png",
                    //             name: "SIKHARAM"
                    //         },
                    //         {
                    //             img: "images/mus/10.png",
                    //             name: "HAMSASYAM"
                    //         },
                    //         {
                    //             img: "images/mus/11.png",
                    //             name: "ANJALI"
                    //         },
                    //         {
                    //             img: "images/mus/12.png",
                    //             name: "ARDHACHANDRAM"
                    //         },
                    //         {
                    //             img: "images/mus/13.png",
                    //             name: "MUKURAM"
                    //         },
                    //         {
                    //             img: "images/mus/14.png",
                    //             name: "BRAMARAM"
                    //         },
                    //         {
                    //             img: "images/mus/15.png",
                    //             name: "SUCHIKAMUGHAM"
                    //         },
                    //         {
                    //             img: "images/mus/16.png",
                    //             name: "PALLAVAM"
                    //         },
                    //         {
                    //             img: "images/mus/17.png",
                    //             name: "TRIPATHAKAM"
                    //         },
                    //         {
                    //             img: "images/mus/18.png",
                    //             name: "MRIGASIRSHAM"
                    //         },
                    //         {
                    //             img: "images/mus/19.png",
                    //             name: "SAPRASIRASU"
                    //         },
                    //         {
                    //             img: "images/mus/20.png",
                    //             name: "VARDHAMANAKAM"
                    //         },
                    //         {
                    //             img: "images/mus/21.png",
                    //             name: "ARALAM"
                    //         },
                    //         {
                    //             img: "images/mus/22.png",
                    //             name: "URNANABHAM"
                    //         },
                    //         {
                    //             img: "images/mus/23.png",
                    //             name: "MUKULAM"
                    //         },
                    //         {
                    //             img: "images/mus/24.png",
                    //             name: "KATAKAMU"
                    //         }
                    //     ]
                    // })
            },
            "blog": () => {
                view.blog("#more", {})
            },
            "about": () => {
                view.about("#more", {}).then(() => {
                    // recommends footer
                    $('.wrapper .about .smile div a').on('click', function () {
                        let tag = $(this).attr('id')
                        $('.wrapper .about .smile img').attr('src', `images/recommends/${tag}.png`)
                    })
                    $('.wrapper .about .smile div a').hover(function () {
                        let tag = $(this).attr('id')
                        $('.wrapper .about .smile img').attr('src', `images/recommends/${tag}.png`)
                    })
                })
            },
            "videos": () => {
                view.videos("#more", {})
            },
            "books": () => {
                view.books("#more", {})
            },
            "mudra": () => {

            },
            "recommend": () => {

            },
            "/": () => {
                router.navigate("/home")
            },
            "*": () => {
                router.navigate("/")
            }
        })
        .notFound(() => {
            alert("Error! Navigo not found!")
        })
        .resolve()

    // ============== DOM ================//

    let stateInit = $(window).scrollTop()
    $(window).on('scroll', function () {
        let elem = $('body .wrapper header.main')
        let rainbow = $('body .wrapper div.rainbow')
        let state = $(this).scrollTop()
        if (state > stateInit + 5 && !isScrolledIntoView($("#invisible-helper"))) {
            elem.css({
                'position': 'fixed',
                'top': '0',
                'width': '64%'
            })
            rainbow.css({
                'position': 'fixed',
                'top': '60px',
                'width': '64%'
            })
            $(' body .logo-name').fadeIn()
        } else {
            elem.css({
                'position': 'inherit',
                'width': '100%'
            })
            rainbow.css({
                'position': 'inherit',
                'width': '100%'
            })
            $('body .wrapper header.main ul li').css('color', 'black')
            $(' body .logo-name').fadeOut(20)
        }
    })

    function isScrolledIntoView(elem) {
        let docViewTop = $(window).scrollTop()
        let docViewBottom = docViewTop + $(window).height()
        let elemTop = $(elem).offset().top
        let elemBottom = elemTop + $(elem).height()
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop))
    }

    // carousel
    setInterval(() => {
        $(".carousel ul.items").animate({
            marginLeft: "-100%"
        }, 2100, function () {
            $(".carousel ul.items li.item:last").after($(".carousel ul.items li.item:first"))
            $(this).css({
                "margin-left": "0"
            })
        })
    }, 7000)

    // menu btn header
    $(() => {
        let isToggle = false
        let $navbar = $('body .wrapper header.main')
        let $rainbow = $('.wrapper .rainbow')
        $('body #menu-btn-cubes').on('click', function () {
            if (!isToggle) {
                $navbar.fadeIn()
                $rainbow.fadeIn()
            } else {
                $navbar.fadeOut()
                $rainbow.fadeOut()
            }
            isToggle = !isToggle
        })
    })

    // Drop-down menu
    $(() => {
        let isToggle = false
        let $navbar = $('ul#menu')
        let $menu = $('header div #menu-tag')
        $('#menu-btn').on('click', function () {
            $('.menu-bar-btn').toggleClass("open")
            if (!isToggle) {
                $navbar.css('display', 'inherit')
                $menu.html('CLOSE')
            } else {
                $navbar.css('display', 'none')
                $menu.html('MENU')
            }
            isToggle = !isToggle
        })
        $('#menu li a').on('click', () => {
            $navbar.css('display', 'none')
            $('.menu-bar-btn').removeClass('open')
            $menu.html('MENU')
            isToggle = !isToggle
        })
    }) // Drop-down menu END

    // $(() => { // Drop-down menu -logo
    //     let isToggle = false
    //     // let $navbar = $('ul#menu')
    //     // let $menu = $('header div #menu-tag')
    //     $('#btn-logo').on('click', function () {
    //         $('.logo-btn').toggleClass("open")
    //         if (!isToggle) {
    //             // $navbar.css('display', 'inherit')
    //             // $menu.html('CLOSE')
    //         } else {
    //             // $navbar.css('display', 'none')
    //             // $menu.html('MENU')
    //         }
    //         isToggle = !isToggle
    //     })
    //     // $('#menu li a').on('click', () => {
    //     //     $navbar.css('display', 'none')
    //     //     $('.menu-bar-btn').removeClass('open')
    //     //     $menu.html('MENU')
    //     //     isToggle = !isToggle
    //     // })
    // }) // Drop-down menu END

    // ani btn bg
    $('.wrapper .self .ani-container .ani').on('click', function () {
        switch ($(this).attr('class')) {
            case 'ani body':
                $body.css({
                    'background-image': 'url(' + "images/magurata.jpg" + ')'
                })
                $wrapper.css({
                    'background-image': 'url(' + "images/magurata.jpg" + ')',
                    'background-size': '40%',
                    'opacity': '1',
                    'box-shadow': '0 0 40px black'
                })
                $sentence.css({
                    'color': 'rgb(230, 222, 217)',
                    'text-shadow': '-1px 1px rgb(79, 62, 79)'
                })
                router.navigate("/body")
                break
            case 'ani spirit':
                $body.css({
                    'background-image': 'url(' + "images/space.jpg" + ')'
                })
                $wrapper.css({
                    'background-image': 'url(' + "images/sacred/tree.png" + ')',
                    'background-size': '40%',
                    'opacity': '0.8',
                    'border': '50%',
                    'box-shadow': '0 0 40px white'
                })
                $sentence.css({
                    'color': '#E56A22',
                })
                router.navigate("/spirit")
                break
            case 'ani mind':
                $body.css({
                    'background-image': 'url(' + "images/bg-n.jpg" + ')'
                })
                $wrapper.css({
                    'background-size': '0 0',
                    'opacity': '1',
                    'box-shadow': '0 0 40px black'
                })
                $sentence.css({
                    'color': 'rgb(79, 62, 79)',
                    'text-shadow': '-1px 1px rgba(241, 223, 179, 1)'
                })
                router.navigate("/mind")
                break
        }
    })

    // triangle
    // $('.wrapper section.triangle-space div.triangle-white')
    //     .on('click', function () {
    //         alert('3')
    //     })
})