import styles from './Pages.module.scss';

import pageName2 from '../../assets/images/pageName2.jpeg';
import pageName3 from '../../assets/images/pageName3.jpeg';
import pageName4 from '../../assets/images/pageName4.jpeg';

import SuggestedPagesElement from './SuggestedPagesElement';


const SuggestedPages = () => {

    const SuggestedPagesList = [
        {
            imageUrl: pageName2,
            pageName: 'Page name 20',
            id: 0,
            pageLikes: Math.floor(Math.random() * 15),
        },
        {
            imageUrl: pageName3,
            pageName: 'Page name 21',
            id: 1,
            pageLikes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName4,
            pageName: 'Page name 22',
            id: 2,
            pageLikes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName3,
            pageName: 'Page name 23',
            id: 3,
            pageLikes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName4,
            pageName: 'Page name 24',
            id: 4,
            pageLikes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName2,
            pageName: 'Page name 25',
            id: 5,
            pageLikes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName3,
            pageName: 'Page name 26',
            id: 6,
            pageLikes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName2,
            pageName: 'Page name 27',
            id: 7,
            pageLikes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName3,
            pageName: 'Page name 28',
            id: 8,
            pageLikes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName4,
            pageName: 'Page name 29',
            id: 9,
            pageLikes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName2,
            pageName: 'Page name 30',
            id: 10,
            pageLikes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName4,
            pageName: 'Page name 31',
            id: 11,
            pageLikes: Math.floor(Math.random() * 15)
        }
    ]

return (
        <>
            <h3 className={styles.titleSuggestedPages}>Suggested Pages</h3>
            <div className={styles.suggestedPages}>
                {SuggestedPagesList.map((suggestedPage) => {
                    return (
                        <SuggestedPagesElement
                            imageUrl={suggestedPage.imageUrl}
                            pageName={suggestedPage.pageName}
                            key={suggestedPage.id}
                            pageLikes={suggestedPage.pageLikes}
                            />
                    )
                })}
            </div>
        </>
    )
}

export default SuggestedPages;