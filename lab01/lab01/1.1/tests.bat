echo off
REM Путь к тестируемой комманде передается через первый аргумент коммандной строки
SET MyProgram="%~1"

REM Защита от запуска без агрумента, задающего путь к программе
if %MyProgram%=="" (
echo Please specify path to programm
exit /B 1
)

REM Копировать непустой файл
node %MyProgram% fileNumberOne.txt fileNumberTwo.txt || goto err
fc fileNumberOne.txt fileNumberTwo.txt > nul || goto err
echo Test 1 passed successfully

REM Скопировать пустой файл
node %MyProgram% empty.txt fileNumberTwo.txt || goto err
fc empty.txt fileNumberTwo.txt > nul || goto err
echo Test 2 passed successfully

REM Копировать отсутствующий файл
node %MyProgram% missing.txt fileNumberTwo.txt>tempFile.txt || goto err
fc missingFile.txt tempFile.txt > nul || goto err
echo Test 3 passed successfully

REM Копировать без аргументов
node %MyProgram% > tempFile.txt || goto err
fc fileWithoutArgument.txt tempFile.txt > nul || goto err
echo Test 4 passed successfully

REM Копирование с одним аргументом
node %MyProgram% fileNumberOne.txt > tempFile.txt || goto err
fc fileWithoutArgument.txt tempFile.txt > nul || goto err
echo Test 5 passed successfully

REM Все тесты прошли успешно
echo All tests passed successfully

REM Tests ok
exit /B 0

REM Tests failed
:err
echo Test failed
exit /B 1