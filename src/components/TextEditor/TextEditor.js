
const TextEditor = () => {

    return (
        <div className="text-editor">
            <div className="text-editor__container">
                <div className="text-editor__container__header">
                    <div className="text-editor__container__header__title">
                        <h1>Text Editor</h1>
                    </div>
                    <div className="text-editor__container__header__buttons">
                        <button className="text-editor__container__header__buttons__button">Save</button>
                        <button className="text-editor__container__header__buttons__button">Load</button>
                    </div>
                </div>
                <div className="text-editor__container__body">
                    <textarea className="text-editor__container__body__textarea" placeholder="Enter text here..."></textarea>
                </div>
            </div>
        </div>
    );
}

export default TextEditor;