import styles from './Chatbox.module.scss';

import { useState } from 'react';

function ChatDropdown() {
    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    }

    return (
        <select value={selectedOption} onChange={handleChange} className={styles.chatDropdown}>
            <option value="">To:</option>
            <option value="option1">Username 1</option>
            <option value="option2">Username 2</option>
            <option value="option3">Username 3</option>
            <option value="option4">Username 4</option>
            <option value="option5">Username 5</option>
            <option value="option6">Username 6</option>
            <option value="option7">Username 7</option>
            <option value="option8">Username 8</option>
            <option value="option9">Username 9</option>
            <option value="option10">Username 10</option>
            <option value="option11">Username 11</option>
            <option value="option12">Username 12</option>
            <option value="option13">Username 13</option>
            <option value="option14">Username 14</option>
            <option value="option15">Username 15</option>
            <option value="option16">Username 16</option>
            <option value="option17">Username 17</option>
            <option value="option18">Username 18</option>
            <option value="option19">Username 19</option>
            <option value="option20">Username 20</option>
            <option value="option21">Username 21</option>
            <option value="option22">Username 22</option>
            <option value="option23">Username 23</option>
            <option value="option24">Username 24</option>
        </select>
    );
}

export default ChatDropdown;