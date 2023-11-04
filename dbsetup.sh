cd src/api/models

npx sequelize-cli db:migrate:undo

npx sequelize-cli db:migrate
if [ $? -eq 0 ]; then
    echo "Tables were created"
else
    echo "Tables were not created"
    cd ../../..
    exit 1;
fi
npx sequelize-cli db:seed:all
if [ $? -eq 0 ]; then
    echo "Seeds run successfully"
else
    echo "Cannot run seeds"
    cd ../../..
    # exit 1;
fi

cd ../../..