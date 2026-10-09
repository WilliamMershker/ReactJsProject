import { useState } from "react";

import uyen01 from "./assets/uyen/uyen-01.jpg";
import uyen02 from "./assets/uyen/uyen-02.jpg";
import uyen03 from "./assets/uyen/uyen-03.jpg";
import uyen04 from "./assets/uyen/uyen-04.jpg";
import uyen05 from "./assets/uyen/uyen-05.jpg";
import uyen06 from "./assets/uyen/uyen-06.jpg";
import uyen07 from "./assets/uyen/uyen-07.jpg";
import uyen08 from "./assets/uyen/uyen-08.jpg";

function InternshipMemory() {

    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const photos = [
        {
            id: 1,
            image: uyen01,
            caption: "Những ngày cô còn ở THPT Tân Phong"
        },
        {
            id: 2,
            image: uyen02,
            caption: "Một khoảnh khắc của những năm tháng sinh viên"
        },
        {
            id: 3,
            image: uyen03,
            caption: "Những hình ảnh bình thường ngày ấy, giờ lại thành kỷ niệm"
        },
        {
            id: 4,
            image: uyen04,
            caption: "Cô cùng chiếc máy ảnh trong những ngày thực tập"
        },
        {
            id: 5,
            image: uyen05,
            caption: "Một ngày rất bình thường trong sân trường"
        },
        {
            id: 6,
            image: uyen06,
            caption: "Những ngày rồi cũng dần trôi qua"
        },
        {
            id: 7,
            image: uyen07,
            caption: "Một góc nhỏ của khoảng thời gian năm ấy"
        },
        {
            id: 8,
            image: uyen08,
            caption: "Có những ký ức càng lâu lại càng thấy đẹp"
        }
    ];

    return (
        <div className="memory-page">

            {/* ================= HERO ================= */}
            <section className="hero">

                <div className="hero-text">

                    <p className="hero-small">
                        THPT TÂN PHONG · MỘT KỶ NIỆM CŨ
                    </p>

                    <h1>
                        Những ngày cô còn ở Tân Phong
                    </h1>

                    <p className="hero-description">
                        Năm đó cô vẫn còn là sinh viên TDTU,
                        về THPT Tân Phong cho kỳ thực tập của mình.
                        Còn em khi ấy chỉ là một học sinh của cô.
                        Có lẽ chẳng ai nghĩ những ngày rất bình thường đó,
                        nhiều năm sau lại trở thành một ký ức được nhớ lâu đến vậy.
                    </p>

                </div>

                <img
                    src={uyen01}
                    alt="Kỷ niệm những ngày thực tập"
                    className="hero-image"
                />

            </section>


            {/* ================= STORY ================= */}
            <section className="story">

                <p className="section-label">
                    CÂU CHUYỆN CỦA NHỮNG NĂM ĐÓ
                </p>

                <h2>
                    Có những khoảng thời gian rất ngắn,
                    nhưng khi đi qua rồi mới biết mình sẽ nhớ nó rất lâu.
                </h2>

                <p>
                    Hồi ấy cô Uyên vẫn còn là sinh viên của Đại học
                    Tôn Đức Thắng. Trong kỳ thực tập sư phạm,
                    cô về THPT Tân Phong để bắt đầu những ngày đứng lớp
                    và làm quen với công việc của một giáo viên.
                </p>

                <p>
                    Còn em lúc đó cũng chỉ là một học sinh bình thường.
                    Khi cô mới về trường, em nghĩ kỳ thực tập rồi cũng sẽ
                    giống rất nhiều chuyện khác trong những năm cấp ba:
                    bắt đầu, diễn ra một thời gian, rồi kết thúc.
                </p>

                <p>
                    Nhưng sau này khi đã rời xa quãng thời gian ấy,
                    em mới nhận ra mình vẫn nhớ khá nhiều thứ.
                    Nhớ hình ảnh cô trong sân trường,
                    nhớ chiếc áo dài màu hồng,
                    nhớ những lần thấy cô cầm máy ảnh,
                    và nhớ cả cảm giác của những ngày mà khi đang sống trong đó,
                    mình chẳng hề biết sau này mình sẽ nhớ đến vậy.
                </p>

                <p>
                    Có lẽ với cô, THPT Tân Phong là một dấu mốc
                    trong những năm tháng sinh viên —
                    một nơi cô từng đến để học cách đứng lớp,
                    học cách trở thành giáo viên
                    và chuẩn bị cho con đường phía trước.
                </p>

                <p>
                    Còn với em, những ngày đó lại trở thành một phần
                    rất đẹp của ký ức thời học sinh.
                    Không phải vì có điều gì quá đặc biệt xảy ra,
                    mà có lẽ chính vì mọi thứ khi ấy đều rất giản dị.
                </p>

            </section>


            {/* ================= TIMELINE ================= */}
            <section className="timeline-section">

                <p className="section-label">
                    DÒNG THỜI GIAN
                </p>

                <div className="timeline">

                    <div className="timeline-item">

                        <span className="timeline-number">
                            01
                        </span>

                        <div>

                            <h3>
                                Những năm tháng ở TDTU
                            </h3>

                            <p>
                                Khi ấy cô vẫn còn là một sinh viên,
                                mang theo những dự định của tuổi trẻ
                                và chuẩn bị bước vào kỳ thực tập sư phạm.
                            </p>

                        </div>

                    </div>


                    <div className="timeline-item">

                        <span className="timeline-number">
                            02
                        </span>

                        <div>

                            <h3>
                                THPT Tân Phong
                            </h3>

                            <p>
                                Rồi cô về Tân Phong thực tập.
                                Ở một nơi rất bình thường,
                                một cô giáo thực tập và những học sinh của mình
                                đã tình cờ cùng đi qua một đoạn thời gian.
                            </p>

                        </div>

                    </div>


                    <div className="timeline-item">

                        <span className="timeline-number">
                            03
                        </span>

                        <div>

                            <h3>
                                Ngày kỳ thực tập kết thúc
                            </h3>

                            <p>
                                Rồi ngày cuối cùng cũng đến.
                                Kỳ thực tập kết thúc,
                                cô tiếp tục con đường của mình,
                                còn học sinh lại trở về với những ngày đi học quen thuộc.
                            </p>

                        </div>

                    </div>


                    <div className="timeline-item">

                        <span className="timeline-number">
                            04
                        </span>

                        <div>

                            <h3>
                                Những năm sau đó
                            </h3>

                            <p>
                                Thời gian trôi qua,
                                cô trở về Quảng Ngãi,
                                còn chúng em cũng dần lớn lên
                                và bước sang những chặng đường khác.
                            </p>

                            <p>
                                Chỉ có những bức ảnh và ký ức của ngày đó
                                vẫn còn nằm lại ở một nơi nào đó.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= GALLERY ================= */}
            <section className="gallery-section">

                <p className="section-label">
                    NHỮNG BỨC ẢNH CÒN LẠI
                </p>

                <h2>
                    Một vài khoảnh khắc của những ngày năm ấy
                </h2>

                <div className="photo-grid">

                    {photos.map(photo => (

                        <div
                            className="photo-card"
                            key={photo.id}
                            onClick={() => setSelectedPhoto(photo)}
                        >

                            <img
                                src={photo.image}
                                alt={photo.caption}
                            />

                            <div className="photo-caption">
                                {photo.caption}
                            </div>

                        </div>

                    ))}

                </div>

            </section>


            {/* ================= LETTER ================= */}
            <section className="letter">

                <p className="section-label">
                    GỬI CÔ UYÊN
                </p>

                <h2>
                    Không biết cô còn nhớ những ngày đó nhiều không...
                </h2>

                <p>
                    Em nghĩ với cô,
                    kỳ thực tập ở THPT Tân Phong có lẽ chỉ là một đoạn ngắn
                    trong rất nhiều chặng đường mà cô đã đi qua.
                </p>

                <p>
                    Sau đó cô hoàn thành những năm tháng sinh viên,
                    cuộc sống tiếp tục,
                    rồi cô trở về Quảng Ngãi.
                    Còn em cũng lớn lên,
                    rời khỏi những năm tháng học sinh ngày ấy.
                </p>

                <p>
                    Chỉ có điều thỉnh thoảng khi nhìn lại những bức ảnh cũ,
                    em vẫn nhớ đến khoảng thời gian cô còn ở trường.
                </p>

                <p>
                    Nghĩ lại cũng hơi buồn cười.
                    Hồi đó mọi thứ bình thường lắm.
                    Có ai đứng giữa một ngày bình thường
                    mà biết được vài năm sau mình sẽ nhớ ngày đó đâu.
                </p>

                <p>
                    Nhìn những bức ảnh này mới thấy thời gian đi nhanh thật.
                    Người trong ảnh khi ấy còn là một cô sinh viên đi thực tập,
                    còn em cũng chỉ là một đứa học sinh.
                </p>

                <p>
                    Vậy mà chớp mắt,
                    tất cả đã trở thành chuyện của nhiều năm trước.
                </p>

                <p>
                    Em làm trang nhỏ này cũng chẳng phải vì có dịp gì đặc biệt.
                    Chỉ là muốn gom lại những bức ảnh của một khoảng thời gian
                    mà em vẫn còn nhớ,
                    rồi kể lại nó theo cách của một học sinh năm đó.
                </p>

                <p>
                    Nếu có một điều em muốn cô biết,
                    thì chắc chỉ là:
                    kỳ thực tập ấy có thể đã kết thúc từ rất lâu đối với cô,
                    nhưng hình ảnh của cô ngày đó
                    vẫn là một trong những ký ức đẹp
                    mà em giữ lại từ thời học sinh.
                </p>

                <p className="letter-ending">
                    Cảm ơn cô vì năm đó đã đến THPT Tân Phong.
                    Chúc cô ở Quảng Ngãi luôn vui,
                    bình an và vẫn yêu công việc mình đã chọn
                    như những ngày đầu tiên. 🌷
                </p>

            </section>


            {/* ================= LIGHTBOX ================= */}
            {selectedPhoto && (

                <div
                    className="lightbox"
                    onClick={() => setSelectedPhoto(null)}
                >

                    <button
                        className="close-button"
                        onClick={() => setSelectedPhoto(null)}
                    >
                        ✕
                    </button>

                    <div
                        className="lightbox-content"
                        onClick={(event) => event.stopPropagation()}
                    >

                        <img
                            src={selectedPhoto.image}
                            alt={selectedPhoto.caption}
                        />

                        <p>
                            {selectedPhoto.caption}
                        </p>

                    </div>

                </div>

            )}

            <footer className="footer">
            <p>
                © 2026 Trương Hoàng Vũ
            </p>

            <span>
                A small memory from THPT Tân Phong
            </span>
        </footer>

        </div>
    );
}

export default InternshipMemory;