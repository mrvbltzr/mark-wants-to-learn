@echo off

:: Define an array of target paths
set "target[0]=%~dp0..\..\software-engineering"
set "target[1]=%~dp0..\..\solid-principles"
set "target[2]=%~dp0..\..\git"

:: ---- Thank You. I'll take it from here ----

:: ----- RunAsAdmin BEGIN -----
mkdir "%windir%\.admin-test"
if '%errorlevel%' == '0' ( rmdir "%windir%\.admin-test" & (
    if exist "%~dp0getadmin.vbs" ( del "%~dp0getadmin.vbs" )
    pushd "%CD%"
    cd /D "%~dp0"
)) else (
    echo Set UAC = CreateObject^("Shell.Application"^) > "%~dp0getadmin.vbs"
    echo UAC.ShellExecute "%~s0", "", "", "runas", 1 >> "%~dp0getadmin.vbs"
    "%~dp0getadmin.vbs"
    exit /B
)
:: ----- RunAsAdmin END -----

setlocal enabledelayedexpansion
set target_count=0
:COUNT_LOOP_TARGET
if defined target[%target_count%] (
    set /A target_count+=1
    goto :COUNT_LOOP_TARGET
)

:: Loop through each folder next to the script
set /A loop_end=target_count-1
for /d %%F in ("%~dp0*") do (
    if /I not "%%~fF"=="%~dp0" (
        set "folderName=%%~nxF"
        echo Processing folder "%%F"
        
        :: Loop through target paths and create symlinks
        for /L %%i in (0, 1, %loop_end%) do (
            if exist "!target[%%i]!" (
                set "target=!target[%%i]!"
                set "linkPath=!target!\!folderName!"

                if exist "!linkPath!" (
                    echo Link already exists at "!linkPath!", skipping...
                ) else (
                    mklink /D "!linkPath!" "%%F"
                )
            )
        )
    )
)

endlocal
echo.
echo Done!
echo Exiting in 5 seconds...
for /l %%i in (5,-1,1) do ( timeout /t 1 /nobreak >nul )
exit /b 0
