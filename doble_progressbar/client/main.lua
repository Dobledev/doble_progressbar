RegisterNetEvent("doble_progressbar:mostrar")
AddEventHandler("doble_progressbar:mostrar", function(texto, duracion)
    SetNuiFocus(false, false)
    SendNUIMessage({
        action = "mostrar",
        texto = texto,
        duracion = duracion
    })

    Citizen.Wait(duracion)

    SendNUIMessage({ action = "ocultar" })
    SetNuiFocus(false, false)
end)
