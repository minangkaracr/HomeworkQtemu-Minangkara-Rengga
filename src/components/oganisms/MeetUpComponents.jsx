import React from 'react'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import CardComponent from '../molecules/CardComponents';
import SubTitle from '../molecules/SubTitle';

class MeetupComponent extends React.Component {
    render() { 
        return (
            <>
            <Container className='align-items-center my-2'>
                <SubTitle title="Past Meetups" lastTitle="See All"/>
                <div className='my-2 px-2'>
                    <Row className='justify-content-between'>
                        <CardComponent 
                            title="Meetup Valorant"
                            desc="Ayo tunjukkan skill Valorantmu! Bergabunglah dalam meetup Valorant untuk para agent handal. Kita akan adu strategi, mainkan mode kompetitif, dan saling belajar dari pro player tamu undangan. Jangan lewatkan kesempatan untuk bertemu sesama penggemar Valorant dan tingkatkan rank-mu!"
                            sub="1.6K People went"
                        />
                        <CardComponent 
                            title="Meetup Piko Park"
                            desc="Pecinta game Piko Park? Yuk, kumpul bareng di SPark untuk merasakan keseruan bermain Piko Park secara offline! Ajak teman-temanmu untuk membentuk tim dan hadapi tantangan-tantangan seru dalam game ini. Selain bermain, kita juga akan mengadakan kuis berhadiah dan lomba kostum Piko Park paling kreatif. Dijamin seru dan bikin ketagihan!"
                            sub="180 People went"
                        />
                        <CardComponent 
                            title="Meetup FC24"
                            desc="Buat para penggemar sepak bola virtual, ini dia kesempatan untuk unjuk gigi! Ayo, ikut serta dalam turnamen FC 24 yang akan kita gelar di GBK. Siapkan tim terbaikmu dan taklukkan lawan-lawanmu. Selain hadiah menarik, kamu juga berkesempatan untuk bertemu dengan sesama penggemar sepak bola virtual dan berbagi tips dan trik."
                            sub="900 People went"
                        />
                        <CardComponent 
                            title="Meetup Monopoly"
                            desc="Kangen bermain Monopoli? Yuk, kita nostalgia bareng di Senayan City! Ajak teman-temanmu untuk bermain Monopoli versi fisik dan rasakan sensasi menjadi seorang jutawan. Selain bermain, kita juga akan mengadakan kuis seputar dunia bisnis dan berbagai aktivitas seru lainnya. Dijamin malammu akan semakin menyenangkan!"
                            sub="320 People went"
                        />
                    </Row>
                </div>
            </Container>
            </>
        );
    }
}
 
export default MeetupComponent;