import { useTranslation } from "react-i18next";
import "./app.css"
import { Button } from "./Components/Button/Button";
import { Input } from "./Components/Input/Input";
import { Switch } from "./Components/switch/Switch";
import { useGeneratorPassword } from "./hook/useGeneratorPassword";

export const App = () => {
    const { t } = useTranslation();

    const {
        handleGeneratorPassword,
        handleCopyText,
        handleLength,
        setLong,
        password,
        renderOptions,
        inputRef,
        long
    } = useGeneratorPassword();

    return (
        <section className='section-app'>
            <h1>{t("title")}</h1>
            <div className="section-app-head-content">
            <Input
                value={password}
                ref={inputRef}

            />
                <Button onClick={handleGeneratorPassword}>{t("buttons.generate")}</Button>
                <Button onClick={handleCopyText}>{t("buttons.copy")}</Button>
            </div>
            <div className="length-section">
                <p className="length-label">{t("amount_characters")}</p>
                <div className="length-controls">
                    <button className="length-btn" onClick={() => handleLength(false)}>−</button>
                    <input
                        className="length-input"
                        value={long}
                        onChange={(e) => {
                            const value = e.target.valueAsNumber;
                            setLong(value);
                        }}
                        type="number"
                    />
                    <button className="length-btn" onClick={() => handleLength(true)}>+</button>
                </div>
            </div>
            {renderOptions.map((item) => (
                <div className="container-options" key={item.label}>
                    <p>{t(`${item.label}`)}</p>
                    <Switch
                        checked={item.active}
                        onChange={item.onChange}
                    />
                </div>
            ))}

        </section>
    );
}