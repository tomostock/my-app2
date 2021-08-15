import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import './css/Book.css';
import boy from './img/boy.png';

function Book(props) {
    return (
        <div className="lylic">
            <HTMLFlipBook width={330} height={450} flippingTime={1500}maxShadowOpacity={0.5}>
                <div className="Page">
                <br />
                    <h3>不思議な少年</h3>
                    <img src={boy} width="200" alt="boy"/>
                    <p className="pageNum">0/5</p>
                    <div className="note" />
                </div>
                <div className="Page">
                    <br /><br />
                    ある日退屈な日常<br />
                    変わりばえしないこの村の<br />
                    いつもは気がつかぬ<br />
                    人のいない路地裏<br />
                    何故か胸が高まり<br />
                    そこへ腰を下し<br />
                    気がつくと目の前には<br />
                    見たことのない不思議な少年が
                    <p className="pageNum">1/5</p>
                </div>
                <div className="Page">
                    <br /><br />
                    少年はサタンと名乗り<br />
                    思いのままに世界を変えれると<br />
                    君も出来るよイメージで<br />
                    たいくつなあの人の顔を<br />
                    笑って欲しいと願えば<br />
                    見てみなほら笑顔さ<br />
                    僕らは思い通りに<br />
                    まるでこの村の神様みたいだろ
                    <p className="pageNum">2/5</p>
                </div>
                <div className="Page">
                    <br /><br />
                    僕は不思議な力を使った<br />
                    次々に夢を叶えて<br />
                    村の人々はまるで<br />
                    別の世界の住人さ<br />
                    夢中で気がつかなかったのか<br />
                    村の様子は寂しげで<br />
                    いつのまにかここは<br />
                    僕らしかいない二人の世界に
                    <p className="pageNum">3/5</p>
                </div>
                <div className="Page">
                    <br /><br />
                    涙目で少年に<br />
                    元に戻して頼んだ<br />
                    でも無表情にできない<br />
                    君の描いた世界だ<br />
                    この世界は確かかい？<br />
                    君はここにいるのかい？<br />
                    僕はまぶたを閉じて<br />
                    元の世界と繰り返し祈り続けた
                    <p className="pageNum">4/5</p>
                </div>
                <div className="Page">
                    <br /><br />
                    目が覚めた先に見える<br />
                    もとの世界の村の路地裏
                    <p className="pageNum">5/5</p>
                </div>
            </HTMLFlipBook>
        </div>
    );
}

export default Book;


