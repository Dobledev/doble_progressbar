# You can use the progress bar with this triggerevent, for example, i made a simple script for test, to give you an idea for integrate in our scripts 

# ONLY CLIENT-SIDE

RegisterCommand('bar_6000', function()
    TriggerEvent("doble_progressbar:mostrar", "Test de 6000ms de progress bar", 6000)
end)

RegisterCommand('bar_10000', function()
    TriggerEvent("doble_progressbar:mostrar", "Test de 10000ms de progress bar", 10000)
end)

RegisterCommand('bar_20000', function()
    TriggerEvent("doble_progressbar:mostrar", "Test de 20000ms de progress bar", 20000)
end)

RegisterCommand('bar_60000', function()
    TriggerEvent("doble_progressbar:mostrar", "Test de 60000ms de progress bar", 60000)
end)

