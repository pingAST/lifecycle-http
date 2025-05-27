import TimePanel from './watches/components/TimePanel/TimePanel';
import Notes from "./crud/Notes";


export default function App () {
    return (
        <>
            <div className={'title'}>
                <h2>Мировые часы</h2>
                <TimePanel/>
            </div>

            <Notes/>
        </>

    );
}