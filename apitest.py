import requests
import csv 
url = "http://sossimon.pythonanywhere.com/profitperday/"

#response = requests.put(url + "2.12.2020", {"date": "02.12.2020", "profit": 0})
#response = requests.get(url + "10.01.2020")
#print(response.json())

#with open('csvfiles/profit.csv', mode='r') as csv_file:
#    csv_reader = csv.DictReader(csv_file)
#    for row in csv_reader:
#        response = requests.put(url + row["date"], {"date": row["date"], "profit": row["profit"]})
#        print(response)

response = requests.put(url + "24.12.2020", {"date": "23.12.2020", "profit": 0.8})
print(response.json)