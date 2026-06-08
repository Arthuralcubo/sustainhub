function percent(part,total){

    if(total <= 0) return 0;

    let value = (part/total)*100;

    return Math.min(100,Math.max(0,value));
}

function evaluateProject(){

    const materiales =
    percent(
        Number(materialReciclado.value),
        Number(materialTotal.value)
    );

    const energia =
    percent(
        Number(energiaRenovable.value),
        Number(energiaTotal.value)
    );

    const agua =
    percent(
        Number(aguaReutilizada.value),
        Number(aguaTotal.value)
    );

    const residuos =
    percent(
        Number(residuosReciclados.value),
        Number(residuosTotal.value)
    );

    const social =
    percent(
        Number(empleosLocales.value),
        Number(empleosTotal.value)
    );

    const circularidad =
    percent(
        Number(materialRecuperable.value),
        Number(materialTotal.value)
    );

    let roi = 0;

    if(Number(costo.value) > 0){

        roi =
        (
            (Number(ingreso.value) -
            Number(costo.value))
            /
            Number(costo.value)
        ) * 100;
    }

    let economia =
    Math.min(100,Math.max(0,roi));

    let biodiversidad = 0;

    if(Number(areaAfectada.value) > 0){

        biodiversidad =
        percent(
            Number(areaRestaurada.value),
            Number(areaAfectada.value)
        );
    }

    let carbono = 100;

    if(Number(produccion.value) > 0){

        let intensidad =
        Number(co2Total.value) /
        Number(produccion.value);

        carbono =
Math.min(
    100,
    Math.max(
        0,
        100 - (intensidad * 100)
    )
);
    }

    const ecoScore = (

        materiales +
        energia +
        agua +
        residuos +
        social +
        circularidad +
        economia +
        biodiversidad +
        carbono

    ) / 9;

    document.getElementById(
    "ecoScore"
    ).innerText =
    ecoScore.toFixed(1);

    document.getElementById(
    "progressFill"
    ).style.width =
    ecoScore + "%";

    let message = "";
    let tips = [];

    if(ecoScore >= 80){

        message =
        "🟢 Proyecto Excelente";
    }

    else if(ecoScore >= 60){

        message =
        "🟡 Proyecto Bueno";
    }

    else{

        message =
        "🔴 Proyecto Mejorable";
    }

    if(energia < 60){

        tips.push(
        "Incrementar energía renovable."
        );
    }

    if(agua < 60){

        tips.push(
        "Mejorar reutilización de agua."
        );
    }

    if(materiales < 60){

        tips.push(
        "Usar más materiales reciclados."
        );
    }

    if(residuos < 60){

        tips.push(
        "Incrementar reciclaje."
        );
    }

    if(social < 60){

        tips.push(
        "Generar más empleo local."
        );
    }

    if(circularidad < 60){

        tips.push(
        "Aumentar material recuperable."
        );
    }

    document.getElementById(
    "evaluationText"
    ).innerText =
    message;

    document.getElementById(
    "recommendations"
    ).innerHTML =
    "<h3>Recomendaciones</h3><ul><li>" +
    tips.join("</li><li>") +
    "</li></ul>";
}