from pydantic_settings import BaseSettings
from pydantic import HttpUrl
from src.vacancies.models import TechStackList, Technology


class VacanciesConfig(BaseSettings):
    base_relocation_keyword: str = "relocation"

    relocation_keywords_supported: list[str] = [
        "relocation assistance",
        "relocation provided",
        "relocation available",
        "willing to relocate",
        "work remotely",
        "remote",
        "telecommute",
        "work from home",
        "remote work",
        "virtual position",
        "relocation support",
        "relocation covered",
        "company sponsored relocation",
        "ability to relocate",
    ]

    relocation_keywords_not_supported: list[str] = [
        "no relocation",
        "relocation not provided",
        "relocation assistance unavailable",
        "must reside in",
        "must be located in",
        "location-specific",
        "must live in",
        "no remote",
    ]

    tech_stack_variants: TechStackList = TechStackList(
        frontend=[
            Technology(
                name="React",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            ),
            Technology(
                name="Angular",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
            ),
            Technology(
                name="Vue.js",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
            ),
            Technology(
                name="Svelte",
                icon="https://raw.githubusercontent.com/sveltejs/branding/master/svelte-logo.svg",
            ),
            Technology(
                name="HTML",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            ),
            Technology(
                name="CSS",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            ),
            Technology(
                name="JavaScript",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            ),
            Technology(
                name="TypeScript",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
            ),
            Technology(
                name="Webpack",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
            ),
            Technology(name="Vite", icon="https://vitejs.dev/logo.svg"),
            Technology(name="Parcel",
                       icon="https://parceljs.org/favicon.a4b04f34.svg"),
            Technology(
                name="Jest",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
            ),
            Technology(
                name="Mocha",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg",
            ),
            Technology(name="Cypress",
                       icon="https://www.cypress.io/img/favicon.ico"),
            Technology(
                name="Bootstrap",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
            ),
            Technology(
                name="Tailwind CSS",
                icon="https://tailwindcss.com/favicons/favicon-32x32.png",
            ),
            Technology(
                name="Material UI",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
            ),
        ],
        backend=[
            Technology(
                name="Python",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            ),
            Technology(
                name="Node.js",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            ),
            Technology(
                name="Java",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
            ),
            Technology(
                name="Ruby",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
            ),
            Technology(
                name="Go",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
            ),
            Technology(
                name="Django",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
            ),
            Technology(
                name="Flask",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
            ),
            Technology(name="Express",
                       icon="https://expressjs.com/images/favicon.png"),
            Technology(name="Spring Boot",
                       icon="https://spring.io/images/favicon.ico"),
            Technology(
                name="Ruby on Rails",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg",
            ),
            Technology(
                name="PostgreSQL",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
            ),
            Technology(
                name="MongoDB",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            ),
            Technology(
                name="MySQL",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
            ),
            Technology(
                name="SQLite",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
            ),
            Technology(
                name="Redis",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
            ),
            Technology(name="REST", icon="https://restfulapi.net/favicon.ico"),
            Technology(
                name="GraphQL",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
            ),
            Technology(name="gRPC", icon="https://grpc.io/img/favicon.png"),
            Technology(name="JWT", icon="https://jwt.io/img/pic_logo.svg"),
            Technology(
                name="OAuth", icon="https://oauth.net/images/oauth-icon.png"),
            Technology(
                name="Passport.js", icon="http://www.passportjs.org/images/favicon.png"
            ),
        ],
        devops=[
            Technology(
                name="Docker",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
            ),
            Technology(
                name="Kubernetes",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
            ),
            Technology(
                name="AWS",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
            ),
            Technology(
                name="Azure",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
            ),
            Technology(
                name="Google Cloud", icon="https://cloud.google.com/images/favicon.png"
            ),
            Technology(
                name="Jenkins", icon="https://www.jenkins.io/images/favicon.ico"
            ),
            Technology(
                name="GitHub Actions",
                icon="https://github.githubassets.com/favicons/favicon.svg",
            ),
            Technology(
                name="GitLab CI", icon="https://about.gitlab.com/images/favicon.png"
            ),
            Technology(
                name="Prometheus",
                icon="https://prometheus.io/assets/prometheus_logo.svg",
            ),
            Technology(
                name="Grafana", icon="https://grafana.com/static/img/favicon.ico"
            ),
            Technology(name="New Relic",
                       icon="https://newrelic.com/favicon.ico"),
            Technology(
                name="Git",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            ),
            Technology(
                name="SVN",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/subversion/subversion-original.svg",
            ),
        ],
        mobile=[
            Technology(
                name="React Native",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            ),
            Technology(
                name="Flutter",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
            ),
            Technology(
                name="Ionic", icon="https://ionicframework.com/favicon.ico"),
            Technology(
                name="Swift",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
            ),
            Technology(
                name="Kotlin",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
            ),
            Technology(
                name="Java",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
            ),
            Technology(
                name="Dart",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
            ),
            Technology(
                name="SQLite",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
            ),
            Technology(name="Realm", icon="https://realm.io/favicon.ico"),
            Technology(name="Firebase",
                       icon="https://firebase.google.com/favicon.ico"),
        ],
        database=[
            Technology(
                name="PostgreSQL",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
            ),
            Technology(
                name="MySQL",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
            ),
            Technology(
                name="SQLite",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
            ),
            Technology(
                name="Oracle",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
            ),
            Technology(
                name="MongoDB",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            ),
            Technology(
                name="Cassandra",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cassandra/cassandra-original.svg",
            ),
            Technology(name="CouchDB",
                       icon="https://couchdb.apache.org/favicon.ico"),
            Technology(name="Firebase",
                       icon="https://firebase.google.com/favicon.ico"),
            Technology(
                name="Elasticsearch",
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg",
            ),
            Technology(
                name="Solr", icon="https://lucene.apache.org/solr/favicon.ico"),
            Technology(
                name="Redshift",
                icon="https://docs.aws.amazon.com/images/redshift/latest/dg/images/favicon.ico",
            ),
            Technology(
                name="BigQuery",
                icon="https://cloud.google.com/images/favicons/favicon.ico",
            ),
            Technology(
                name="Snowflake",
                icon="https://www.snowflake.com/wp-content/themes/snowflake/favicon.ico",
            ),
        ],
    )


vacancies_config = VacanciesConfig()
